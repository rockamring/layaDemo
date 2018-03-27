
module layaDemo{
require('boot');
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400);

        pomelo.init({
            host:'127.0.0.1',
            port:3014,
            log:true
        }, function(){

        });
    }
}
new GameMain();
}