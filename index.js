const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.json({messager: 'hello from backend, we are now connected.'});
});

app.listen(8080, function(){
    console.log("Server started on port 8080");
});