const express = require('express')
const path = require('path');
const app = express()

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

// app.use(express.static(__dirname + '/build'))
app.use(express.static(path.join(__dirname, 'car', 'build')));

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, 'build', 'car', 'index.html'));
}) 

// app.get('/index', (요청, 응답) => {
//   응답.sendfile(__dirname+'/public/index.html')
// }) 


app.get('/about', (요청, 응답)=>{
  응답.sendfile(__dirname+'/about.html')
})


