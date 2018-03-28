
module layaDemo{
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
var pomelo = require('pomelonode~pomelo-jsclient-websocket@master');
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(1136,640);
		laya.utils.Stat.show(0, 0);
		
		Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
		
		Laya.stage.screenMode = "horizontal";
		
		// Laya.loader.load([
        //     {url : "res/login@atlas0.png", type:Loader.IMAGE},
        //     {url : "res/login.fui", type: Loader.BUFFER}], 
        //     Handler.create(this, this.onLoaded));

        pomelo.init({
            host:'127.0.0.1',
            port:3014,
            log:true
        }, function(){

        });

        
    }
	
	onLoaded(): void{
		Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
		
		fairygui.UIPackage.addPackage("res/login");
	}
}
new GameMain();
}