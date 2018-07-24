var express = require('express');
var router = express.Router();
var request = require('request');

// These are url's of Flask app's localhost/docker environment
// TODO: Replace these with actual flask url. better yet, env variable in Docker.
// const API_BASE_URL = 'http://0.0.0.0';
const API_BASE_URL = 'http://172.17.0.2';
const PORT = '5000';
var questionsUrl = API_BASE_URL + ':' + PORT + '/questions';
var carsUrl = API_BASE_URL + ':' + PORT + '/cars';

// GET home page -> serves index.html
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Connected!' });
});

// GET home page -> serves index.html
router.get('/api', function(req, res, next) {
	res.status(200).json({ message: 'Connected to api! Use api/questions or api/cars!' });
});

router.get('/api/questions', function(req, res, next){
	request(questionsUrl, function(error, response, body){
		if (error){
			console.log(error);
		}
		else {
			res.send(JSON.parse(body));
		}
	})
});

router.get('/api/cars', function(req, res, next){
	request(carsUrl, function(error, response, body){
		if (error){
			console.log(error);
		}
		else {
			res.send(JSON.parse(body));
		}
	})
});

module.exports = router;
