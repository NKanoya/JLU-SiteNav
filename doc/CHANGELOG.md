# 更新日志

## [1.0.0]

![发布日期20250608](https://img.shields.io/badge/发布-2025--6--8-informational)
![HTML](https://img.shields.io/badge/发布形式-HTML网页-blueviolet)
![不再更新](https://img.shields.io/badge/支持-不再更新-lightgrey)


此版本发布了「吉大常用网址导航」的 **HTML 网页**。

### 核心功能

- 收录了包括教务管理系统、OA 在内的 17 个 JLU 常用网站。
-支持两种打开方式：
  - 单击直接跳转
  - 点击按钮在新标签页中打开
- 对无法跳转的网站支持快捷链接拷贝
- 网站搜索栏集成

### 发布形式

- 单文件 HTML
- CSS/JS 分离的 HTML 文件



## 1.1.0

![发布日期20251214](https://img.shields.io/badge/发布-2025--12--14-informational)
![Alpha](https://img.shields.io/badge/Alpha-red)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vuedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)

此版本使用 Vue 3 对项目进行了完全重构，提升了用户体验和代码可维护性。

> 此版本的方案已弃用，请使用 [1.1.0-chrome](#1.1.0-chrome)

### 🚀 新增

- 使用 Vue 3 + Composition API 重构前端
- 使用改进的响应式设计
- 新增智慧树网等多个常用网站收录（总数增加至 21 个）

### 📋 变更

- 暂时移除搜索功能（将在后续版本优化后重新加入）
- 完善了所有网址的介绍信息
- 重构网址信息结构，数据不再硬编码在网页中，便于维护和更改
- 重构排序逻辑，引入可配置的优先级系统，便于未来维护。

## [1.1.0-chrome]

![发布日期20251215](https://img.shields.io/badge/发布-2025--12--15-informational)
![Chrome扩展](https://img.shields.io/badge/发布形式-Chrome/Edge%20扩展-blueviolet)
![稳定版](https://img.shields.io/badge/状态-稳定版-brightgreen)
![生产就绪](https://img.shields.io/badge/环境-生产就绪-success)
![LTS](https://img.shields.io/badge/支持-长期维护-69a)

此版本发布了发布导航页对应的了 **Chrome/Edge 插件**，并使项目规范化。

### 🚀 新增

- 发布 Chrome/Edge 浏览器扩展，点击浏览器工具栏图标即可快速打开导航页
- 添加了 [MIT 许可证](../LICENSE)
- 完善了项目文档