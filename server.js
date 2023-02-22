const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs');
  
app.listen(port, () => console.log(`${port}포트입니다.`));
  
// 몽구스 연결

// 1. mongoose 모듈 가져오기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter12.html
// https://www.geeksforgeeks.org/mongoose-insertmany-function/
// excel to json
// http://shancarter.github.io/mr-data-converter/
var mongoose = require('mongoose');
// 2. testDB 세팅
mongoose.connect('mongodb+srv://passionatel:0ez8kwW6i4sPRC2v@cluster0.dxzb4w2.mongodb.net/test');
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. 연결 성공
db.once('open', function() {
    console.log('Connected!');
}); 

app.get("/test999", (req,res) => {  
	res.sendFile(__dirname + 'test999.html'); 
	});

app.get("/list2", (req,res) => {  
	db.collection('tests').find().toArray(function(에러, 결과){
		console.log(결과);
		res.render('list2.ejs', { posts: 결과 }); // posts 결과에는 ' ' 안씀
	});
  });

app.get('/', function (req, res) {
	db.collection('tests').find().toArray(function(에러, 결과){
		console.log(결과);
		res.render('list.ejs', { posts: 결과 }); // posts 결과에는 ' ' 안씀
	});
  });





