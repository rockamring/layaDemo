class MainPanel {
    private _view: fairygui.GComponent;
    private _joystick: JoystickModule;
    //private _text: fairygui.GTextField;

    public constructor() {
        this._view = fairygui.UIPackage.createObject("Joystick","Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        //this._text = this._view.getChild("n9").asTextField;

        this._joystick = new JoystickModule(this._view);
        this._joystick.on(JoystickModule.JoystickMoving,this,this.onJoystickMoving);
        this._joystick.on(JoystickModule.JoystickUp,this,this.onJoystickUp);
    }

    private onJoystickMoving(degree:number): void {
        //this._text.text = "" + degree;
    }

    private onJoystickUp(): void {
        //this._text.text = "";
    }
}