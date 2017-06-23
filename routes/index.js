const router = require('express').Router()
var Promise = require("bluebird");
const Hotel = require('../models/hotel.js');
const Restaurant = require('../models/restaurant.js');
const Activity = require('../models/activity.js');

router.get('/', (req, res, next) => {

	var findAllHotels = Hotel.findAll();
    var findAllRestaurants = Restaurant.findAll();
    var findAllActivities = Activity.findAll();
    console.log('=====>' + findAllHotels);
       
    Promise.all([
    	findAllHotels, findAllRestaurants, findAllActivities
    ])
    	.then(function(values) {

    		var hotels = values[0];
    		var restaurants = values[1];
    		var activities = values[2];

    		res.render('index', {
    			hotels: hotels,
    			restaurants: restaurants,
    			activities: activities
    		});
    	})
    	.catch(next);

});

module.exports = router;