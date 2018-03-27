

var sqlAgent = module.exports;

var _pool;

var SQL = {};
SQL.init = function(app){
    _pool = require('./dao-pool').createMysqlPool(app);
}

SQL.query = function(sql, args, cb){
    _pool.acquire(function(err, client){
        if (!!err){
            console.error('[sqlQueryError' + err.stack);
            return;
        }
        client.query(sql, args, function(err, res){
            _pool.release(client);
            cb(err, res);
        })
    })
}
SQL.shutdown = function(){
    _pool.destroyAllNow();
}



sqlAgent.init = function(app){
    if (!!pool){
        return sqlAgent;
    }
    else
    {
        SQL.init(app);
        sqlAgent.insert = SQL.query;
        sqlAgent.update = SQL.query;
        sqlAgent.delete = SQL.query;
        sqlAgent.query = SQL.query;
        return sqlAgent;
    }
}

sqlAgent.shutdown = function(app){
    SQL.shutdown();
}