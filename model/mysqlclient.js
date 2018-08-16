var mysqlclient = {};
var _pool = null;
var POLL = {};
POLL.init = function() {
    if (!_pool) {
        _pool = require("./mysql-pool").createdMysqlPool();
    }
};

POLL.query = function(sql, args, callback) {
    _pool.getConnection(function(err, client) {
        if (!!err) {
            console.error("[sqlqueryErr] " + err.stack);
            return;
        }
        client.query(sql, args, function(err, res) {
            _pool.releaseConnection(client);
            callback.apply(null, [err, res]);
        });
    });
};

mysqlclient.init = function() {
    if (!!_pool) {
        return sqlclient;
    } else {
        POLL.init();
        mysqlclient.query = POLL.query;
        return mysqlclient;
    }
};

module.exports = mysqlclient;
