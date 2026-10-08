# Mobile App

使用 React Native、Expo SDK 57 和 TypeScript 创建的手机 App 起始项目，支持 iOS、Android 与 Web。

## 开始开发

建议使用 Node.js 24 LTS（最低 22.13）。在项目目录执行：

```bash
npm ci
npm start
```

手机安装与 SDK 57 兼容的 Expo Go，并与电脑连接同一网络，扫描开发服务器显示的二维码。无法局域网连接时可尝试 `npx expo start --tunnel`。

```bash
npm run web       # 浏览器预览
npm run ios       # iOS 模拟器，需要 Xcode
npm run android   # Android 模拟器，需要 Android Studio
```

## 包含内容

- 中文欢迎首页，带有可点击及重置的计数示例。
- Safe Area 适配及可滚动布局。
- TypeScript 类型检查与 Expo ESLint 配置。
- Web 预览依赖和可复现的 npm 锁文件。

这是通用起始项目，未接入登录、后端服务或业务数据。演示计数保存在内存中，重启应用会归零。

## 目录

- `App.tsx`：应用首页与交互。
- `index.ts`：Expo 应用入口。
- `assets/`：默认应用图标。
- `app.json`：应用名称、图标及平台配置。

## 检查与构建

```bash
npm run typecheck
npm run lint
npx expo-doctor
npm run export:web
```

`export:web` 输出到 `dist/`，不生成手机安装包。发布手机应用前请配置唯一的 bundle identifier / package name，并使用 Expo EAS Build 构建签名包。

参考：[Expo 开发文档](https://docs.expo.dev/get-started/start-developing/)。

## 本次验证（2026-10-08）

- TypeScript、ESLint 均通过。
- iOS、Android、Web 的 JavaScript / Hermes bundle 导出通过；尚未在实体手机或原生模拟器上运行。
- 浏览器验证计数从 00 增加到 01，并可重置到 00。
- Expo Doctor 通过 20/21 项：当前电脑的 Xcode Command Line Tools 缺失，系统 Git 无法运行，因此 Git 忽略检查未通过；`.gitignore` 已包含 `.expo/`。
- `npm audit` 报告 22 项依赖告警（7 moderate、15 high），涉及 Expo / Metro 等上游依赖链。自动建议包含跨主版本降级，因此未执行 `npm audit fix --force`。正式发布前需跟进兼容的上游修复。
