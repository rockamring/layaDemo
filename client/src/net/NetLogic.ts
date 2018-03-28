var pomelo = require('pomelonode~pomelo-jsclient-websocket@master');
class NetLogic
{
    public static Instance:NetLogic;
    public constructor()
    {
        NetLogic.Instance = this;
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
                        NetLogic.onLoginSuccess();                        
                    });
                });                
            });
        });
    }

    static onLoginSuccess():void{
        console.log("login success!!!");
        UIManager.Instance.ShowMain();
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