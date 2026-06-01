# Daily Tree — 图片 & 表情包功能设计

**日期：** 2026-06-01  
**状态：** 已批准

---

## 目标

在每日记录中支持：
1. 上传本地图片（含 GIF）作为记录的附件
2. 在文字中插入 Emoji 表情

---

## 数据结构

### Entry（扩展）

```js
{
  id: Number,         // Date.now()
  date: String,       // ISO 日期字符串
  text: String,       // ≤500 字符，Emoji 直接内嵌
  images: String[]    // IndexedDB 图片 ID 列表，默认 []
}
```

### IndexedDB Store：`daily-tree-images`

```js
{
  id: String,         // 唯一 ID（`img_${Date.now()}_${random}`）
  blob: Blob,         // 压缩后的图片文件
  createdAt: String   // ISO 日期
}
```

DB 名：`daily-tree-db`，版本升到 2（新增 images store）。

---

## 图片处理规则

- 上传前用 Canvas 压缩：最长边 ≤800px，JPEG 质量 0.8
- 压缩后体积 ≤300KB，超出则继续降质量至 0.6
- 支持格式：jpg / png / gif / webp
- GIF 不压缩，直接存原始 Blob
- 单次上传上限：3 张
- 写入前若 IndexedDB 占用 >50MB，toast 提示用户清理旧记录

---

## UI 改造

### 输入 Modal（`openModal`）

底部新增工具栏：

```
[ 😊 表情 ]  [ 📷 图片 ]  ··················  [ 12/500 ]
```

**📷 图片按钮：**
- 触发隐藏的 `<input type="file" accept="image/*" multiple>`
- 选完后异步压缩 → 存 IndexedDB → 输入框下方出现缩略图行
- 每张缩略图右上角有 ✕ 删除按钮
- 最多 3 张，超出后按钮变灰

**😊 表情按钮：**
- 点击展开浮层，显示常用 Emoji（30 个固定 + 6 个分类标签）
- 点击 Emoji 插入到 textarea 光标位置
- 点击浮层外关闭

### 记录展示（卡片 & Branch Panel）

文字下方新增图片缩略图行：
- 缩略图尺寸：56×56px，`object-fit: cover`，圆角 8px
- 最多显示 3 张，超出显示 `+N` 灰色占位块
- 点击缩略图全屏预览（简单 overlay）

### 搜索结果

不展示图片，仅展示文字（现有逻辑不变）。

---

## 新增文件

| 文件 | 职责 |
|------|------|
| `app/db.js` | IndexedDB 初始化、图片 CRUD |
| `app/emoji-picker.js` | Emoji 浮层组件 |
| `app/image-compressor.js` | Canvas 压缩逻辑 |

---

## 修改文件

| 文件 | 改动 |
|------|------|
| `app/app.js` | entry 结构扩展、modal 工具栏、缩略图渲染、全屏预览 |
| `app/style.css` | 工具栏、缩略图、emoji 浮层样式 |
| `app/index.html` | 引入新 JS 文件，modal 结构调整 |

---

## 不在范围内

- 云端同步 / 备份
- 图片搜索
- 视频支持
- 表情包库（第三方 GIF 搜索）
