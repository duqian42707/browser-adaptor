# 开发过程

## 新建项目

```bash
npm init
```

## 发布项目

```bash
npm publish
```

## 安装webpack

```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

添加配置文件：`webpack.config.js`
```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

```


## 安装typescript

```bash
npm install --save-dev typescript
npm install --save-dev ts-loader 
```

添加配置文件：`tsconfig.json`
