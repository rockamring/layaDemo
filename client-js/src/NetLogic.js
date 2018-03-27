//import * as pomelo from '../bin/libs/components/pomelonode-pomelo-jsclient-websocket/lib/pomelo-client'
//pomelo = require('pomelonode-pomelo-jsclient-websocket/lib/pomelo-client.js');
require('boot');
var NetLogic = (function () {
    function NetLogic() {
    }
    NetLogic.doLogin = function(username, rid)
    {
        NetLogic.queryEntry(username, function(host, port){
            pomelo.init(
                {
                    host:host,
                    port: port,
                    log:true
                },
                function(){
                    var route = 'connector.entryHandler.enter';
                    pomelo.request(route, {
                        username:username,
                        rid:rid
                    }, function(data){
                        if (data.error){
                            return;
                        }
                        // success

                    })
                }
            )
        });
    }
    NetLogic.queryEntry = function(uid, callback){
        var route = 'gate.gateHandler.queryEntry';
        pomelo.init({
            host:'127.0.0.1',
            port:3014,
            log:true
        }, function(){
            pomelo.request(route, {uid:uid}, function(data){
                pomelo.disconnect();
                if (data.code == 500)
                {
                    return;
                }
                callback(data.host, data.port);
            })
        });
    }
    NetLogic.sendMsg = function(msg, rid, username, target)
    {
        var route = 'chat.chatHandler.send';
        pomelo.request(route, {
            rid:rid,
            content:msg,
            from:username,
            target:target
        },
        function(data){

        });
    }
    return NetLogic;
}());