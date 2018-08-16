var mysqlClient = require('./mysqlclient').init();

var db = {};

db.login = function () {
    return new Promise(function (resolve, reject) { 
        var obj = {
            a: 'A'
        }
        resolve(obj);
    })
}

db.getUser = function () {
    return new Promise(function (resolve, reject) { 
        var sql = 'select * from user';
        var args = [];
        mysqlClient.query(sql, args, (err, res) => {
            var objData = {};
            if(err !== null){

            } else {
                if (!!res) {
                    var string=JSON.stringify(res);
                    var json=JSON.parse(string);
                    var obj = json;
                    resolve(obj);
                }
            }
        })
    })
}
module.exports = db;