/*
* name;
*/
var pomelo = require('pomelonode~pomelo-jsclient-websocket@master');
class MsgHandler{
    constructor(){

    }
    public init():void{
        pomelo.on('onChat', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().onChat(data);
            }
        });

        pomelo.on('onAdd', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().onAdd(data);
            }
        });

        pomelo.on('onLeave', function(data){
            if (UIManager.Instance.getChatPanel){
                UIManager.Instance.getChatPanel().onLeave(data);
            }
        });

        pomelo.on('disconnect', function(data){
            UIManager.Instance.ShowLogin();
        });
    }
}