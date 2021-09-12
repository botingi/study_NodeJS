const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use((req,res,next) => {
    console.log('모든 요청에 실행하고 싶어요');
    next();
} //(req, res, next) => {
    //throw new Error('Error가 발생했습니다.');}
);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req,res) => {
    res.send('hello express');
});

app.get('/about', (req,res) => {
    res.send('hello express');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})