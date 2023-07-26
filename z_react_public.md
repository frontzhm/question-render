---
title: 怎么发布 React 组件到 NPM - 使用tsdx
tags: vue
categories: vue
theme: vue-pro
highlight:
---
用一个工具[`tsdx`](https://github.com/jaredpalmer/tsdx)写 React 组件:

```shell
npx tsdx create mylib
cd mylib
yarn start
```

选择模版的时候

- basic: 用于一个 TypeScript 包，可以开发任何东西，灵活度高
- react: 用于开发 React 组件的包，内置了@types，而且有一个基于 Parcel 的调试模块，帮助快速开发
- react-with-storybook: 与 react 模版相同，但是多内置了 storybook

这里选择第二个 react 模版。

目录结构如下：

```shell
dist # 编译后的输出目录
example # 开发调试的文件夹
node_modules
package.json
src # 写组件源码
test
tsconfig.json
yarn.lock
```

想看组件效果，需要同时启动两个命令，一个是项目的实时编译，一个是 example 的调试

```shell
yarn start # 项目的实时编译,监测代码变更，编译最新版本到dist

# 再启动另一个命令
cd example
yarn install
yarn start # 监测dist变更，重新启动example的内容
```

如果发现以下报错：

```shell
...../index.tsx: Invalid Version: undefined
```

[解决方案](https://github.com/jaredpalmer/tsdx/issues/980)，这边简单将`example/package.json`的 parcel 更换版本

```shell
# example/package.json
#  本来
"parcel": "^1.12.3",
#  改成
"parcel": "1.12.3",
```

重新启动，好使了，改下 src 里面的内容，也及时变化了，发现有一定的延迟

## 加上 css

如果将上面的组件，引入 css 文件，就发现报错啦

```shell
✖ Failed to compile
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
```

默认 tsdx 不支持 css，这边需要配置下，安装相应插件。

```shell
npm i -D rollup-plugin-postcss postcss
```

新建配置文件`tsdx.config.js`

```js
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      // @ts-ignore
      postcss({
        inject: true,
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
```

重新运行下两个`yarn start`，样式生效了！

## 支持 less 和模块化

如果是 less 文件的话，同样需要插件处理

```shell
npm install less postcss-modules --save-dev
```

```js
const postcss = require('rollup-plugin-postcss');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      // @ts-ignore
      postcss({
        inject: true,
        extract: !!options.writeMeta,
        modules: true, // 使用css modules
        // namedExport: true, // 类名导出
        camelCase: true, // 支持驼峰
        // sass: true, // 是否使用sass
        // less:true,
        // autoModules:true,
        // namedExports(name) {
        //   // Maybe you simply want to convert dash to underscore
        //   return name.replace(/-/g, '_')
        // }
      })
    );
    return config;
  },
};
s;
```

因为在 ts 环境下，需要一个声明文件，src 下创建`less.config.ts`

```js
declare module '*.less' {
  const content: any;
  export default content;
}
```

这样less文件也可支持啦！

## 发布

根目录运行

```shell
yarn build
# nrm ls
# nrm use npm
npm login
npm publish
```

