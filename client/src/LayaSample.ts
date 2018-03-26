
//import {AwesomeMessage} from "./protocol.js"
import {awesomepackage} from "../libs/protocol"
//import protocol = require("awesomepackage.AwesomeMessage");

module layaDemo{

// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400);
        //protocol.awesomepackage.AwesomeMessage.create();

        awesomepackage.AwesomeMessage.create();
    }
}
new GameMain();
}