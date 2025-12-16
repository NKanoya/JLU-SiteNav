# 测试版本计划与历史

## 🚀 当前测试版本

### v1.1.0-alpha.2 (2025-12-17)

![发布日期20251217](https://img.shields.io/badge/发布-2025--12--17-informational)
![Alpha](https://img.shields.io/badge/Alpha-red)
![1.1.0.101](https://img.shields.io/badge/插件版本号-v1.1.0.101-brightgreen)


#### 📝 改动记录

- 引入新的链接跳转模式，能够避免被 IEDU 拦截。
    - **现在 IEDU 网站也可以直接跳转**，无需手动复制链接。
- **重构**：对所有的网站应用新的链接跳转模式。
- **重构**：删除了有关“无法跳转网站”的所有标志位、声明和判断。。

#### 🧪 重点测试

- 验证 IEDU 是否能稳定跳转
- 对所有卡片验证新的链接跳转模式，测试相较过去版本是否存在卡顿

**- `1.1.0.alpha.1` 未验证内容：**

- 验证 TS 重构的卡片点击事件逻辑：
    - **确保点击卡片内按钮时，卡片背景色不再误变**。
    - 确认重写的卡片元素点击逻辑按预期工作，没有引入新的冲突

#### ⚠️ 已知问题 (Beta)
- 网页图标在浏览器深色模式下不明显。
- 扩展初次加载时，深色模式背景会出现渲染延迟，出现闪烁。

#### 📥 安装与反馈

**安装**：请前往 [GitHub Release v1.1.0-alpha.2](https://github.com/NKanoya/JLU-SiteNav/releases/tag/v1.1.0-alpha.2) 下载 `.zip` 文件，按 README 指引加载。

**反馈**：欢迎通过 [GitHub Issues](https://github.com/NKanoya/JLU-SiteNav/issues) 提交在使用中遇到的问题或改进建议。反馈时请注明版本号 `v1.1.0-beta.1`。

----

## 历史测试版本

| 版本                                                                                     | 发布日期       | 主要更新              | 状态 |
|----------------------------------------------------------------------------------------|------------|-------------------|------|
| [`v1.1.0-alpha.1`](https://github.com/NKanoya/JLU-SiteNav/releases/tag/v1.1.0-alpha.1) | 2025-12-16 | 上线暗色模式和悬浮按钮组件     | 测试中 |
| [`v1.1.0-alpha.2`](https://github.com/NKanoya/JLU-SiteNav/releases/tag/v1.1.0-alpha.2) | 2025-12-17 | 解决 IEDU 无法直接跳转的问题 | 测试中 |


----

