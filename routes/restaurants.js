const Restaurant = require('../models/restaurant')
const express = require('express')
const router = express.Router()

const restaurants = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },  
]

router.get('/', (req, res) => {
  const restaurant = new Restaurant({
    title: 'Ministry Of Beer',
    description: 'Sector 29 Gurgaon',
    imgSrc: 'qwerty',
    restaurantType: 'Bar',
    latitude: '23.45',
    longitude: '45.56' 
  })

  restaurant.save()
    .then((result) => {
      Restaurant.find().then((result) => res.send(result))
    })
    .catch((error) => console.log(error))
})

router.post('/', (req, res) => {
  const { error } = validateRestaurant(req.body)
  if (error) return res.status(400).send(error.details[0].message)

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

  const { error } = validateRestaurant(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
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

function validateRestaurant(restaurant) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(restaurant, schema);
}

module.exports = router