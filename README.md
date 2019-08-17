Typescript Electron Webpack Hello World Demo
============================================

有几个地方需要注意：

1. electron里一般分为main和renderer两个process, main相当于browser, renderer相当于载入的页面，两者可以使用的api不同（main中可以使用node，而renderer不可以），所以在webpack中，需要分别对两者进行bundle
1. main在webpack中对应的target是`electron-main`, renderer对应的是`electron-renderer`
1. webpack.config.ts可以export出来一个数组，同时使用多个config
1. 在main对应的webpack config中，需要设置:
   ```
   node: {
     __dirname: false,
     __filename: false
   }
   ```
   否则`__dirname`等返回值为`/`，不正确


```
npm install
npm demo
```
