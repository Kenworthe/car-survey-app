var express = require('express');
var router = express.Router();
var request = require('request');

// These are url's of Flask app's localhost/docker environment
var questionsUrl = '0.0.0.0:5000/questions';
var carsUrl = '0.0.0.0:5000/cars';

// GET home page -> serves index.html
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Connected!' });
});


// GET home page -> serves index.html
router.get('/api', function(req, res, next) {
	res.status(200).json({ message: 'Connected to api! Use api/questions or api/cars!' });
});

//GET marta rail api endpoint, return json
router.get('/api/questions', function(req, res, next){
	// replace "martaRail" with url for flask app.
  request(questionsUrl, function(error, response, body){
    if (error){
      console.log(error)
    }
    else {
      res.send(body);
    }
  })
});

//GET marta bus api endpoint, return json
router.get('/api/cars', function(req, res, next){
	// replace "martaBus" with url for flask app.
  request(carsUrl, function(error, response, body){
    if (error){
      console.log(error)
    }
    else {
      res.send(body);
    }
  })
});

module.exports = router;
