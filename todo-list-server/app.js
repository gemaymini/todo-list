var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var todoItems=[
	{id:0,value:'React',done:false,delete:true}
]

app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','content-type');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	next();
})

app.get('/items',function(req,res){
	res.send(todoItems);
});

app.post("/items",function(req,res){
	if(req.body.todoItem)
	{

		todoItems=[...todoItems,req.body.todoItem]
	}
	res.send(todoItems);
})

app.delete('/items',function(req,res){
	if(req.body.id){
		todoItems.forEach(todoItem=>{
			if(todoItem.id==req.body.id)
			{
				todoItem.delete=true;
			}
			})
	}
	res.send(todoItems);
})

app.put('/items',function(req,res){
	if(req.body.id){
		todoItems.forEach(todoItem=>{
			if(todoItem.id==req.body.id)
			{
				todoItem.value=req.body.value;
			}
			})
	}
	res.send(todoItems);
})

app.listen(8000,function(){
	console.log('Server running at http://127.0.0.1:8000/')
});


