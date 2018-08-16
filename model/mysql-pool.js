var mysql  = require('mysql');
var config = require('../config/config');
var mysqlConfig = config.mysql;

function createdMysqlPool() {
    var pool = mysql.createPool({
        host: mysqlConfig.host,
        user: mysqlConfig.user,
        password: mysqlConfig.password,
        database: mysqlConfig.database,
        port:mysqlConfig.port,
        timezone:'08:00'
    });
    return pool;  
}

function test() {
    var a = '11111';
    return a;
}
module.exports = {
    createdMysqlPool: createdMysqlPool,
    test:test
}
