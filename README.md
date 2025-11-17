# README

## 常用命令

### 从模板拷贝项目

#### ui组件

```
pnpm run turbo gen workspace --type package --copy @repo/react-library-template --name @repo/library-name
```

修改 `packages\storybook-config\preset.ts` 的 `resolve` 部分

#### 应用

```
pnpm run turbo gen workspace --type app --copy @repo/react-vite-app-template --name @repo/app-name
```