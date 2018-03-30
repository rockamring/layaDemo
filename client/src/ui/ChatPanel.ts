/*
* name;
*/
class ChatPanel{
    private _view:fairygui.GComponent;
    private _content:fairygui.GTextField;
    private _sendBtn:fairygui.GObject;
    private _combox:fairygui.GComboBox;
    private _input:fairygui.GObject;
    private _users:Array<string> = ['all'];
    constructor(){
        fairygui.GRoot.inst.removeChildren();
        this._view = fairygui.UIPackage.createObject("chat", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        this._content = this._view.getChild("n8").asTextField;
        this._sendBtn = this._view.getChild("n4");
        this._combox = this._view.getChild("n7").asComboBox;
        this._input = this._view.getChild("n5");

        this._sendBtn.onClick(this, this.onSendClick);
        //this._combox.onClick(this, this.onComboxClick);

        this._combox.items = this._users;
    }

    private onSendClick():void{
        var target  = this._combox.text;

        if (target == ""){
            return;
        }
        if (this._input.text == ""){
            return;
        }
        
        NetLogic.Instance.sendMsg((target == "all")? '*':target, this._input.text);
    }
    public addMsg(data:any):void{
        var target = (data.target == '*')? 'all':data.target;
        var from = data.from;
        var msg = data.msg;
        if (data.msg === null) return;
        
        var content = this._content.text;
        if (content != ""){
            content = `${content}
${from} say to ${target}: ${msg}`;
        }else{
            content = `${from} say to ${target}: ${msg}`;
        }
        this._content.text = content;
    }
    public addUser(data:any):void{
        var user = data.user;
        if (user == ""){
            return;
        }
        if (this._users.filter(str => (str == user)).length != 0){ 
            return;
        }
        this._users.push(user);
        this._combox.items = this._users;
    }
    public delUser(data:any):void{
        var user = data.user;
        if (user == ""){
            return;
        }
        var idx = this._users.indexOf(user);
        if (idx >= 0){
            this._users.splice(idx, 1);
        }
        this._combox.items = this._users;
    }
    public initUsers(data:any):void{
        data.users.forEach(element => {
            this._users.push(element);
        });
        this._combox.items = this._users;
    }
}