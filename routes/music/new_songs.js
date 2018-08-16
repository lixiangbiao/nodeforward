/*
 * @Author: ecitlm 
 * @Date: 2017-07-14 10:16:06 
 * @Last Modified by:   ecitlm
 * @Last Modified time: 2017-12-01 09:22:33
 */
//音乐新歌榜
const express = require('express')
const app = express()
const Server = require('../untils/httpServer.js')

app.get('/', function(req, res) {
    var host = "m.kugou.com";
    var path = "/?json=true";
    var data = req.params
        //false:http请求  true:https请求
    Server.httpGet(host, data, path, false).then(function(body) {
        res.send(body);

    }).catch(function(err) {
        res.send({
            msg: "糟糕!!! 网络好像有点问题",
            code: 0
        })
        console.log(err)
    })
});

module.exports = app;