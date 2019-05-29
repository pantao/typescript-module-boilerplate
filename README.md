# TypeScript Module Boilerplate

## 开发

### 开发环境

执行以下命令即可进入开发模式

- `git clone git@github.com:pantao/typescript-module-boilerplate.git`
- `cd typescript-module-boilerplate`
- `yarn install && npx npm-install-peers`

### 开发

```bash
yarn watch
```

执行以上命令之后会自动进入 `jest watch` 模式，所有对 `src` 进行的修改都会自动执行 `jest` 测试，如果想单独监听某一个文件，
可以在 `jest` 启动之后，按 `p` 键，然后输入文件名前缀即可匹配单个文件。