# README

## 常用命令

### 从模板拷贝项目

#### ui组件

```
pnpm run turbo gen workspace --type package --copy @repo/react-library-template --name @repo/library-name
```

#### 应用

```
pnpm run turbo gen workspace --type app --copy @repo/react-vite-app-template --name @repo/app-name
```

## 常见问题

### Windows stdio in console mode does not support writing non-UTF-8 byte sequences

修改PowerShell编码设置（当前会话）

```
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
```
