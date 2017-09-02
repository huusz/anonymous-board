// express 로드
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const sever = app.listen(3000, () => {
  console.log("Express server has started on port 3000")
});

// static 파일

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: '@#@#$huusz#@$#$',
  resave: false,
  saveUninitialized: true
}));

const router = require('./router/main')(app, fs);