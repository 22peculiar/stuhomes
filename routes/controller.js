var express = require('express');
var router = express.Router();

// Route for the home page
router.get('/', function(req, res){
    res.render('home', {});
});

// Route for the about page
router.get('/about', function(req, res){
    res.render('about', {});
});

// Route for the register page
router.get('/register', function(req, res){
    res.render('register', {});
});

// Route for the register page
router.get('/login', function(req, res){
    res.render('login', {});
});

// Add more routes for other functionalities

// Example route for a dashboard page
router.get('/dashboard', function(req, res){
    res.render('dashboard', {});
});

// Example route for a profile page
router.get('/profile', function(req, res){
    res.render('profile', {});
});

// ... add more routes as needed

//exports the router so it can be used in different parts of the app
module.exports = router;
