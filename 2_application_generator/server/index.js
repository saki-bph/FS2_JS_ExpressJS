try{
const express = require('express');
const app = express();
const port = 4500;
app.get('/', function(req, res){
    res.send("Hello World");
});
app.listen(port, ()=>{
  console.log("ok on" + port);
});
}
catch(err){
  console.log(err.message);
}
finally{}
