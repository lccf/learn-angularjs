# learn-angularjs

## 示例说明
- 基础实例 example1/index.html
- 基础实例-自动启动 example1/auto.html
- 数据绑定 example2/index.html
- 表达式 example3/index.html
- 表达式-单次绑定 example3/onetime.html
- 指令 example4/index.html
- 自定义指令 example4/create.html
- 过滤器 example5/index.html
- 私有函数 example6/index.html
- 多重作用域 example6/inheritance.html
- 单元测试 example7/index.html

## 查看
```bash
npm install browser-sync -g
# 启动本地web服务器
browser-sync start --server
```

## 使用karma测试
示例代码为example7

```bash
# 安装基础包
npm install karma-cli -g
npm install

# 测试
karma start karma start karma.conf.js
# 指定使用PhantomJS执行测试代码
karma start karma.conf.js --browsers PhantomJS
```

## 使用protractor测试
示例代码为example8

```bash
# 安装browser-sync和protractor
npm install protractor -g
# 升用 webdriver
webdriver-manager update
# 启动webdriver
webdriver-manager start
# 启动本地web服务器
browser-sync start --server --no-open
# 执行测试
protractor conf.js
```
