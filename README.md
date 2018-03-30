# layaDemo
layaair demo

I. 项目简介
一个简单的聊天小程序，输入名字以及房间名字即可进入游戏，如果不同玩家的房间名字一样即可进入同一个房间进行聊天。基于网易开源游戏服务器引擎pomelo的官方chat示例websocket版本（git@github.com:NetEase/chatofpomelo-websocket.git）修改而成。
服务器：pomelo框架，protobuf序列化message，websocket通信。
客户端：layaair引擎typescript版本。


II. 目录结构
	client:laya引擎typescript版本
	client-unity：unity版本
	server：基于pomelo的nodejs服务器
	FairyGUI：laya版本ui工程
	tools：无用

III. 安装简介

Server步骤：
1 首先安装node.js，npm -v测试安装成功
2 安装pomelo，最好先git一份，然后在源码根目录npm install -g
3 在server目录运行npm-install-game，安装pomelo运行相关的组建，会在game-server目录创建node-module目录，其中包含大量的库
4 起服pomelo start，常用参数-D后台运行，-e development/production运行版本

Client步骤
1 unity版本: unity2017.2.0f3，layaair ts语言
2 采用了pomelo提供的4个component，websocket、protobuf、protocol、emitter，这四个包需要通过component工具进行build
3 这四个包是在浏览器模式下使用的，但是代码比较通用，通过简单的修改即可运行（PS：最新的component会报错，待TODO）
4 ui采用fairyGUI进行编辑加载运行

IV. UI简单介绍
使用fairyGUI的原因只是为了了解下这个UI系统，简单的了解了下

优点：独立编辑器，操作习惯类似adobe系工具，功能很强大，与游戏编辑器完全分离，支持市面上主流的游戏引擎，编辑效果非常方便，比如图文混排、超链接、下拉列表等等，适合美术或者策划进行编辑操作。
缺点：游戏内需要代码与游戏进行关联，有一定的学习成本，效率？


参考文献
1 https://github.com/HustLion/pomelo-chat
2 https://github.com/HustLion/pomelo-chat-unity-socket
3 linux下nodejs安装http://blog.csdn.net/qq_21794603/article/details/68067821
4 node.js工程基础知识介绍http://blog.csdn.net/u011240877/article/details/76582670#packagejson-%E6%96%87%E4%BB%B6
5 emitter:https://github.com/component/emitter
6 protobuf:https://github.com/pomelonode/pomelo-protobuf
7 protocol:https://github.com/NetEase/pomelo-protocol
8 websocket:https://github.com/pomelonode/pomelo-jsclient-websocket
9 component:https://github.com/componentjs/component