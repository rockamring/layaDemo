

class UIManager{
    public static Instance:UIManager;
    private _view: fairygui.GComponent;
    private _container:any;
    public constructor(){
        UIManager.Instance = this;
        this._container = {};//初始化
        Laya.loader.load([
            { url: "res/login@atlas0.png", type: Loader.IMAGE},
            { url: "res/login.fui", type: Loader.BUFFER},
            { url: "res/Joystick@atlas0.png", type: Loader.IMAGE },
            { url: "res/Joystick.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    private onLoaded():void{
        
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);

        fairygui.UIPackage.addPackage("res/Joystick");
        fairygui.UIPackage.addPackage("res/login");

        this.ShowLogin();
        //this.ShowMain();
    }
    public ShowLogin():void{

        // this._view = fairygui.UIPackage.createObject("login", "Main").asCom;
        // this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        // fairygui.GRoot.inst.addChild(this._view);
        new LoginPanel();
    }

    public ShowMain():void{
        // this._view = fairygui.UIPackage.createObject("Joystick","Main").asCom;
        // this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        // fairygui.GRoot.inst.addChild(this._view);
        
        new MainPanel();
    }
}