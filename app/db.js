// app/db.js
const DB_NAME    = 'daily-tree-db';
const DB_VERSION = 2;
const STORE_NAME = 'images';

let _db = null;

export function openDB() {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = e => { _db = e.target.result; resolve(_db); };
    req.onerror   = e => reject(e.target.error);
  });
}

export async function saveImage(id, blob) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put({ id, blob, createdAt: new Date().toISOString() });
    tx.oncomplete = resolve;
    tx.onerror    = e => reject(e.target.error);
  });
}

export async function getImage(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE_NAME, 'readonly')
      .objectStore(STORE_NAME).get(id);
    req.onsuccess = e => resolve(e.target.result?.blob || null);
    req.onerror   = e => reject(e.target.error);
  });
}

export async function deleteImage(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = resolve;
    tx.onerror    = e => reject(e.target.error);
  });
}

export async function getDBSizeEstimate() {
  try {
    if (!navigator.storage?.estimate) return 0;
    const { usage } = await navigator.storage.estimate();
    return usage || 0;
  } catch {
    return 0;
  }
}
