/*
Created by anhpt@
Jan 18, 2021.
*/
const express = require('express')
const app = express()
var path = require('path');

//Nhúng middleware body-parser vào Express
var bodyParser = require('body-parser')

//secure server by helmet: https://helmetjs.github.io/
var helmet = require('helmet')
//app.use(helmet())

//secure server from DDOS by rate limit: https://www.npmjs.com/package/express-rate-limit
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 600, // limit each IP to 300 requests per window
 message:
    "System: Hệ thống đang nhận quá nhiều request từ phía IP bạn, bạn chờ 15 phút rồi trở lại./There are too many connections from your IP, please try again after 15 mins!/ IPからの接続が多すぎます。15分後にもう一度やり直してください。"
});
//app.use(limiter);

//allow other sitea can query to
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({limit: '3mb', extended: true}))
app.use(bodyParser.json({limit: '3mb', extended: true}))

//Tuỳ biến Router
//app.use(express.static(__dirname + '/web'));
var serveIndex = require('serve-index');
app.use(express.static(__dirname + "/web"))
app.engine('html', require('ejs').renderFile);
app.use('/_shared', express.static('./_shared'), serveIndex('./_shared', {'icons': true}))
const server = require('http').createServer(app);

//apply socketio from blockchain
const io = require('socket.io')(server);
const usersRouter  = require('./routers/usersRouter')(io)
//(io)
app.use('/api', usersRouter)
app.use(require("./routers/usersRouter")(io));

io.on('connection', client => {
    client.on('nfto', data =>{
        console.log(data)
        //io.send(data);
        io.emit('nfto',data);
    })
});



//start server
server.listen(8077);
