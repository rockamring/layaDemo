


var userDao = module.exports;

userDao.createUser = function(username, password, from, cb){
    var sql = 'insert into User (name,password,`from`,logincount,lastlogintime) value(?,?,?,?,?)';
    var logintime = Data.now();

}