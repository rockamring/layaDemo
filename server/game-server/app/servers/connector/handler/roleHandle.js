


module.exports = function(app){
    return new Handler(app);
}

var Handler = function(app){
    this.app = app;
}

Handler.prototype.createPlayer = function(msg, session, next)
{
    var uid = session.uid, roleId = msg.roleId, name = msg.name;

}