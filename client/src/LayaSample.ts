
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

// 程序入口
class GameMain{
    private static Instance:GameMain;//单例

    private _uimgr:UIManager;
    private _netmgr:NetLogic;
    private _scenemgr:SceneManager;
    private _msghandler:MsgHandler;
    constructor()
    {
        // 2d
        Laya.init(1136,640);
		laya.utils.Stat.show(500, 0);
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
		
		Laya.stage.screenMode = "horizontal";
        // 3d
        // Laya3D.init(0, 0, true);
        // Laya.Stat.show();
		//适配模式
        // Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;		
		
        GameMain.Instance = this;
        this._netmgr = new NetLogic();
        this._uimgr = new UIManager();
        //this._scenemgr = new SceneManager();
        this._msghandler = new MsgHandler();

        //SceneManager.Instance.changeScene("Arena");
    }
}
new GameMain();