var pomelo = require('pomelonode~pomelo-jsclient-websocket@master');
class NetLogic
{
    public static Instance:NetLogic;
    public _username:string;
    public constructor()
    {
        NetLogic.Instance = this;
        this._username = "";
    }

    public queryEntry(uid:any, rid:any):void{
        var route1 = 'gate.gateHandler.queryEntry';
        pomelo.init({
            host:'127.0.0.1',
            port:3014,
            log:true
        }, function(){
            pomelo.request(route1, {uid:uid}, function(data){
                pomelo.disconnect();
                if (data.code == 500)
                {
                    return;
                }
                // login gate success
                pomelo.init({
                    host:data.host,
                    port:data.port,
                    log:true
                }, function(){
                    var route2 = 'connector.entryHandler.enter';
                    pomelo.request(route2, {
                        username:uid,
                        rid:rid
                    }, function(data){
                        if (data.error){
                            return;
                        }
                        // login entry success
                        NetLogic.Instance.onLoginSuccess(data);                        
                    });
                });                
            });
        });
    }

    onLoginSuccess(data:any):void{
        
        //UIManager.Instance.ShowMain();
        UIManager.Instance.ShowChat();
        if (data.users.length > 0)
        {
            this._username = data.users[0];
            var n = this._username;
            console.log(`${n} login success!!!`);
        }        
    }

    public sendMsg(target:string, msg:string){
        if (msg == "") return;

        var route = 'chat.chatHandler.send';
        pomelo.request(route, {
            rid:"room",
            content:msg,
            from:this._username,
            target:target
        }, function(data){
            UIManager.Instance.getChatPanel().addMsg(data);
        })

    }
    public createPlayer(username:string, roleId:number):void{
        var route = 'connector.roleHandler.createPlayer';
        pomelo.request(route, {name:username, roleId:roleId }, function(data){
            if (data.code == 500){
                return; 
            }
        })
    }

    public changeScene():void{
        var route = 'area.playerHandler.enterScene';
    }
}