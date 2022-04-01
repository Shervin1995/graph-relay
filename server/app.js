import express from 'express' 
import router from "./Route"

var app = express();

 
//
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '50mb'}));

app.use(router);

//
app.listen(4000, () => {
  console.log("server started on 4000!");
});