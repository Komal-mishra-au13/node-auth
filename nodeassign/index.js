var express = require("express");
var bodyParser = require("body-parser");
const { db } = require("./model/user");
const PORT = 8000;
const MongoInit = require('./config/mongodb');
const bcrypt = require('bcryptjs');

MongoInit();

const app = express();
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


app.post("/sign_up",(req,res)=>{
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    var password = req.body.password;
    var phno = req.body.phno;
    

    var data = {
        "firstname": firstname,
        "lastname" :lastname,
        "email" : email,
        "password" : password,
        "phno": phno,
    }

    data.password = bcrypt.hashSync(req.body.password, 9);

    db.collection('user').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})
