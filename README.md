# 每日一树 · Daily Tree

每天留下一件值得记住的事，用一棵随记录生长的树回看自己的日常。

[打开应用](https://nuts-and-bytes.github.io/daily-tree/app/) · [项目首页](https://nuts-and-bytes.github.io/daily-tree/) · [English](#english)

## 可以做什么

| 功能 | 使用结果 |
| --- | --- |
| 每日记录 | 保存文字、心情与图片，回看过去的日常 |
| 树木生长 | 将记录的积累呈现为树木变化 |
| 天气效果 | 授权定位后获取天气，呈现对应的场景效果 |
| 备份与恢复 | 导出和导入本地记录，便于自行备份 |

## 本地运行

需要 Python 3。静态应用不需要启动后端或安装根目录依赖。

```sh
git clone https://github.com/nuts-and-bytes/daily-tree.git
cd daily-tree
python3 -m http.server 8000
```

打开 <http://localhost:8000/app/>；项目首页是 <http://localhost:8000/>。

## 数据与使用边界

- 文字记录保存在当前浏览器的 LocalStorage，图片使用 IndexedDB；没有跨设备自动同步。
- 清除浏览器站点数据、换浏览器或更换域名会影响本地记录。现有 JSON 备份导出读取 LocalStorage，不包含 IndexedDB 中的图片，请另外保留原图。
- 天气功能会请求定位，并向 Open-Meteo 发送坐标以获取天气；不能将本地保存日记理解为应用完全不联网。
- 浏览器、触屏和微信内打开的实际体验需要分别验证，不承诺所有设备具有相同效果。

## 项目结构与发布

- `app/`：记录界面、树木、图片保存与天气逻辑。
- `index.html`、`landing.html`：项目入口与介绍页面。
- `screenshots/`：已有界面截图；截图可能早于当前版本。
- [部署说明](DEPLOYMENT.md)：以当前 `pages.yml` 为依据的发布入口。

当前仓库没有独立 `LICENSE` 文件，许可证待维护者明确。

## English

Daily Tree is a browser-based daily journal that turns accumulated entries into a growing tree. [Try the app](https://nuts-and-bytes.github.io/daily-tree/app/) or run `python3 -m http.server 8000` from this repository and open `/app/`.

Text entries use LocalStorage; images use IndexedDB. The existing JSON backup does not include IndexedDB images. There is no automatic cross-device sync. Optional weather requests send location coordinates to Open-Meteo. Browser storage can be cleared, so keep separate backups. This repository currently has no standalone LICENSE file.
