const Food = require('../models/Food');
const { readData, writeData } = require('../utils/utils');

// get all foods
exports.getAllFoods = (req, res) => {
  let data = readData();
  res.json(data.foods);
};

// get food by id 
exports.getFoodById = (req, res) => {
  let data     = readData();
  let id       = parseInt(req.params.id);
  let food     = data.foods.find(x => x.id === id);

  food ? res.json(food) : res.status(404).send(`Food with ID: ${id} not found`);
};

// search foods by name
exports.searchFoodsByName = (req, res) => {
  let data = readData();
  let query = req.query.name.toLowerCase();
  
  let filteredFoods = data.foods.filter(food => food.name.toLowerCase().includes(query));

  res.json(filteredFoods);
};


// create food
exports.createFood = (req, res) => {
  let data = readData();
  let { name, calories, protein, carbs, fats } = req.body;

  let createfood = new Food(data.foods.length + 1, name, calories, protein, carbs, fats);

  data.foods.push(createfood);
  writeData(data);
  res.status(201).json(createfood);
};

// update food
exports.updateFood = (req, res) => {
  let data = readData();
  let { id, name, calories, protein, carbs, fats } = req.body;
  
  let foodIndex = data.foods.findIndex(x => x.id === parseInt(id));

  if (foodIndex > -1) {
    data.foods[foodIndex] = new Food(id, name, calories, protein, carbs, fats);
  
    writeData(data);
    res.json(data.foods[foodIndex]);
  } else {
    res.status(404).send(`Food with ID: ${foodIndex} not found`);
  }
};

// delete food
exports.deleteFood = (req, res) => {
  let data          = readData();
  let id            = parseInt(req.params.id);
  let foodIndex     = data.foods.findIndex(x => x.id === id);

  if (foodIndex > -1) {
    data.foods.splice(foodIndex, 1);
    writeData(data);
    res.status(200).send(`Food with ID: ${foodIndex} deleted`);
  } else {
    res.status(404).send(`Food with ID: ${foodIndex} not found`);
  }
};