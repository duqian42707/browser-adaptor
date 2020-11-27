# 开发过程

## 新建项目

```bash
npm init
```


## 安装webpack

```bash
npm install --save-dev webpack webpack-cli
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
```

添加配置文件：`tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```



## 加载ts文件

```bash
npm install --save-dev ts-loader
```

```js
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./app.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
```



## 加载less、css样式文件

```bash
npm install --save-dev less style-loader css-loader less-loader
```

```js
module.exports = {
  ...
  resolve: {
    extensions: [".less", ".css"]
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
    ]
  }
};
```



## 加载html文件

```bash
npm install --save-dev html-loader
```

```js
module.exports = {
  ...
  resolve: {
    extensions: [".html"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          esModule: true,
        },
      },
    ]
  }
};
```



## 加载svg文件

```bash
npm install --save-dev svg-url-loader
```

```js
module.exports = {
  ...
  resolve: {
    extensions: [".svg"]
  },
  module: {
    rules: [
      {test: /\.svg$/, use: 'svg-url-loader'},
    ]
  }
};
```



## 启用 HtmlWebpackPlugin

```bash
npm install --save-dev html-webpack-plugin
```

```bash
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};
```



## 自动清除输出目录

```bash
npm install --save-dev clean-webpack-plugin
```

```bash
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  ...
  plugins: [
    new CleanWebpackPlugin()
  ],
};
```



## 启用开发服务器

```bash
npm install --save-dev webpack-dev-server
```

```js
module.exports = {
  ...
  devServer: {
    contentBase: './dist'
  },
};
```

```bash
{
  "scripts": {
    "start": "webpack serve"
  },
}
```






## 发布项目

```bash
npm publish
```
