var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    //res.send('Thomas is just peculiar...')
    res.render('login',{});
});

//exports the router so it can be used in different parts of the app
module.exports = router