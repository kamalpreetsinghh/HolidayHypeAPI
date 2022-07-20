const Restaurant = require('../models/restaurant')
const restaurants = require('../data/filteredRestraunts')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Restaurant.find()
    .then((result) => {
      let restaurants = []
      let restaurantDetails = {}

      result.forEach(restaurant => {
        const { id, title, description, imgSrc, restaurantType, latitude, longitude } = restaurant
        restaurantDetails = { id, title, description, imgSrc, restaurantType, latitude, longitude }

        restaurants.push(restaurantDetails)
      });
      res.send(restaurants)
    })
    .catch((error) => res.status(500).send(error.message))
})

router.post('/insert', (req, res) => {

  // let images = [
  //   "https://www.pexels.com/photo/blur-breakfast-chef-cooking-262978/", 
  //   "https://www.pexels.com/photo/clear-wine-glass-on-table-67468/",
  //   "https://www.pexels.com/photo/chef-preparing-vegetable-dish-on-tree-slab-1267320/",
  //   "https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/",
  //   "https://www.pexels.com/photo/clear-footed-glass-beside-bowl-370984/",
  //   "https://www.pexels.com/photo/empty-dining-tables-and-chairs-1579739/",
  //   "https://www.pexels.com/photo/view-of-empty-restaurant-239975/",
  //   "https://www.pexels.com/photo/man-holding-drinking-glass-580613/",
  //   "https://www.pexels.com/photo/cafe-store-facade-1322184/",
  //   "https://www.pexels.com/photo/people-in-cafe-2788792/"
  // ]

  // let index = 0
  // let imgSrc = ""

  // restaurants.forEach(restaurant => {
  //   imgSrc = images[index];
  //   const { title, description, restaurantType, latitude, longitude, address, phone } = restaurant

  //   const restaurantDocument = new Restaurant({ title, description, imgSrc, restaurantType, latitude, longitude, address, phone })

  //   restaurantDocument.save()
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log(error))

  //     if(index > 9) {
  //       index = 0;
  //     } else {
  //       index++;
  //     }
  // });

  res.send("Data Saved Successfully")

})

router.post('/', (req, res) => {
  const restaurant = {
    id: genres.length + 1,
    name: req.body.name
  };

  restaurants.push(genre);
  res.send(restaurant);
});

router.put('/:id', (req, res) => {
  const restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');

  restaurant.name = req.body.name; 
  res.send(restaurant);
});

router.delete('/:id', (req, res) => {
  const restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');

  const index = restaurants.indexOf(restaurant);
  restaurants.splice(index, 1);

  res.send(restaurant);
});

router.get('/:id', (req, res) => {
  const restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');
  res.send(restaurant);
});

function filterRestaurants(restaurants) {
  let category = ''
  let isSameCategory = false
  let filteredRestaurants = []

  restaurants.forEach (restaurant => {
    if (restaurant.Category != category) {
      let restaurantDetails = {}
      category = restaurant.Category
      isSameCategory = true

      restaurantDetails.restaurantType = restaurant.Category
      restaurantDetails.title = restaurant['Restaurant Name']
      restaurantDetails.imgSrc = restaurant['Restaurant Yelp URL']
      restaurantDetails.latitude = restaurant['Restaurant Latitude']
      restaurantDetails.longitude = restaurant['Restaurant Longitude']
      restaurantDetails.address = restaurant['Restaurant Address']
      restaurantDetails.phone = restaurant['Restaurant Phone']

      restaurantDetails.description = `${restaurantDetails.title} serves deliciuos and authentic ${restaurantDetails.restaurantType} food. We are located at ${restaurantDetails.address} and you can contact us on ${restaurantDetails.phone}`

      filteredRestaurants.push(restaurantDetails)
    } else if (restaurant.Category == category && isSameCategory == true) {
      let restaurantDetails = {}
      isSameCategory = false
      restaurantDetails.restaurantType = restaurant.Category
      restaurantDetails.title = restaurant['Restaurant Name']
      restaurantDetails.imgSrc = restaurant['Restaurant Yelp URL']
      restaurantDetails.latitude = restaurant['Restaurant Latitude']
      restaurantDetails.longitude = restaurant['Restaurant Longitude']
      restaurantDetails.address = restaurant['Restaurant Address']
      restaurantDetails.phone = restaurant['Restaurant Phone']

      restaurantDetails.description = `${restaurantDetails.title} serves deliciuos and authentic ${restaurantDetails.restaurantType} food. We are located at ${restaurantDetails.address} and you can contact us on ${restaurantDetails.phone}`
      filteredRestaurants.push(restaurantDetails)
    }
  });

  return filteredRestaurants
}

module.exports = router