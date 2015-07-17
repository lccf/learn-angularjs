# learn-angularjs

## 说明
example1-6 基础示例、example7 unit test、example8 E2E test

## 使用karma测试example7

```bash
# 安装基础
npm install karma-cli -g
npm install

# 测试
karma start karma start karma.conf.js
# 指定使用PhantomJS执行测试代码
karma start karma.conf.js --browsers PhantomJS
```
## 使用Protractor测试example8
