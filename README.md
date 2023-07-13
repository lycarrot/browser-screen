### 什么是Puppeteer？
Puppeteer是一个node库，它本身提供了一组可以用来操作chrome的API，也就是说，常用的操作是把它当作一个headless chrome浏览器（实际上它也可以配置有UI的模式，只是不常用）。
Puppeteer可以模拟浏览器的操作，可以使用js接口进行操控浏览器，意味凡是Chrome浏览器能干的事情，Puppeteer都能出色的完成，比如：
* 抓取网页正常渲染的内容，无论是基于html还是基于js的异步加载；
* 自动执行表单提交、UI测试、键盘输入，举个例子：模拟用户登录；
* 创建最新的自动化测试环境。它能使用最新的javascript和浏览器功能，并直接在最新版本的chrome浏览器上运行；
* 捕获时间线，帮助网站诊断性能问题；
* 测试chrome扩展程序；
* 生成页面截图和PDF。

### 为什么选择Puppeteer？
Puppeteer常用来用做自动化测试，它比较单一的语言支持（js）和单一的环境（nodejs），咋一看似乎不支持多语言是弱势，实则在稳定性和运行效率上会更有利于开发。
其次，Puppeteer对于多标签的支持，比同类型的自动化测试框架更优，能实现更灵活的操作。
特别是在网页截图上，Puppeteer简直就是so easy ~

### 环境安装
#### 安装依赖
```js
yum install -y alsa-lib.x86_64 atk.x86_64 cups-libs.x86_64 GConf2.x86_64 gtk3.x86_64 ipa-gothic-fonts libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXrandr.x86_64 libXScrnSaver.x86_64 libXtst.x86_64 pango.x86_64 wqy-unibit-fonts.noarch wqy-zenhei-fonts.noarch xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-fonts-cyrillic xorg-x11-fonts-misc xorg-x11-fonts-Type1 xorg-x11-utils`
```
#### 安装&配置node环境
```js
cd /opt
wget https://npmmirror.com/mirrors/node/v16.13.1/node-v16.13.1-linux-x64.tar.xz
tar -xvf node-v16.13.1-linux-x64.tar.xz
ln -s /opt/node-v16.13.1-linux-x64 /opt/node
ln -s /opt/node/bin/node /usr/bin/node
ln -s /opt/node/bin/npm /usr/bin/npm
npm i -g cnpm
ln -s /opt/node/bin/cnpm /usr/bin/cnpm
chown -R root:root node-v16.13.1-linux-x64
cnpm i -g puppeteer
cnpm i -g bufferutil
cnpm i -g utf-8-validate
```

