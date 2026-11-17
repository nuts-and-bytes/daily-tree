# Daily Tree 部署说明

以 [.github/workflows/pages.yml](.github/workflows/pages.yml) 为准：推送到 `main` 或手动触发此工作流，会把仓库根目录作为静态站点发布到 GitHub Pages。

- 应用：<https://nuts-and-bytes.github.io/daily-tree/app/>
- 首页：<https://nuts-and-bytes.github.io/daily-tree/>
- 记录：[GitHub Actions](https://github.com/nuts-and-bytes/daily-tree/actions/workflows/pages.yml)

## 更新步骤

1. 在任务分支完成修改，用 `python3 -m http.server 8000` 本地预览。
2. 检查差异，只提交本次相关文件，按项目授权创建 PR 并合并。
3. 合并到 `main` 后查看 Actions；发布成功后再检查线上页面。

当前工作流没有配置功能分支预览、自动语法检查或构建测试，不能把推送功能分支当作上线。部署耗时与缓存更新以实际运行结果为准。

## 首次配置与排查

在仓库 Settings → Pages 中将 Source 设置为 GitHub Actions。若发布失败，先查看工作流日志与 Pages 权限，再检查文件路径。

浏览器中的日记与图片属于站点本地数据，发布代码不会自动迁移这些数据。变更域名前应备份记录并保留原图。需要回滚时，先确认具体版本和授权，再通过正常提交与发布流程恢复；不要用强制推送覆盖历史。
