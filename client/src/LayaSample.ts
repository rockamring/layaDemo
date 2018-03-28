
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

// 程序入口
class GameMain{
    private static Instance:GameMain;//单例

    private _uimgr:UIManager;
    private _netmgr:NetLogic;
    constructor()
    {
        Laya.init(1136,640);
		laya.utils.Stat.show(0, 0);
		
		Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
		
		Laya.stage.screenMode = "horizontal";
		
        GameMain.Instance = this;
        this._netmgr = new NetLogic();
        this._uimgr = new UIManager();
    }
}
new GameMain();