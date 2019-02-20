//jshint esverison: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

//connect url
const url = 'mongodb://localhost:27017';

//database name
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 8,
  review: "solid fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema ({
  name: "String",
  age: "Number"
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Jonathan",
  age: 37
});

//person.save();

const kiwi = new Fruit ({
  name: "kiwi",
  rating: 10,
  review: "best fruit"
});

const orange = new Fruit ({
  name: "orange",
  rating: 9,
  review: "solid like the color"
});

const banana = new Fruit ({
  name: "Apple",
  rating: 8,
  review: "solid fruit"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err) {
    console.log(error);
  }else {
    console.log("SUCCESS");
  }
});
