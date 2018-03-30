/*
* name;
*/
var pomelo = require('pomelonode~pomelo-jsclient-websocket@master');
class MsgHandler{
    constructor(){
        this.init();
    }
    public init():void{
        pomelo.on('onChat', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().addMsg(data);
            }
        });

        pomelo.on('onAdd', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().addUser(data);
            }
        });

        pomelo.on('onLeave', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().delUser(data);
            }
        });

        pomelo.on('disconnect', function(data){
            
        });
    }
}