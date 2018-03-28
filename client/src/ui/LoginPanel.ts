/*
* name;
*/
class LoginPanel{
    private _view:fairygui.GComponent;
    private _login:fairygui.GObject;
    private _create:fairygui.GObject;
    private _username:fairygui.GObject;

    constructor(){
        fairygui.GRoot.inst.removeChildren();
        this._view = fairygui.UIPackage.createObject("login", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        this._login = this._view.getChild("n9");
        this._create = this._view.getChild("n8");
        this._username=  this._view.getChild("n2");

        this._login.onClick(this, this.onClickLogin);
        this._create.onClick(this, this.onClickCreate);
    }

    private onClickLogin():void{
        var name = this._username.text;
        if (name == "")
        {
            return;
        }
        NetLogic.Instance.queryEntry(name, "1");
    }
    private onClickCreate():void{
        console.log(this._view.name);
        SceneManager.Instance.changeScene("Arena");
    }
}