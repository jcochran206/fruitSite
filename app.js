//jshint esverison: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

//connect url
const url = 'mongodb://localhost:27017';

//database name
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'needed name']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit ({
  name: "Mango",
  rating: 9,
  review: "Great fruit"
});

mango.save();

const personSchema = new mongoose.Schema ({
  name: "String",
  age: "Number",
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Jeff",
  age: 36,
  favoriteFruit: "mango"
});

Person.updateOne({name: "Jonathan"}, {favoriteFruit: "mango"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully updated one");
  }
})

person.save();

// addition of new fruits
// const kiwi = new Fruit ({
//   name: "kiwi",
//   rating: 10,
//   review: "best fruit"
// });
//
// const orange = new Fruit ({
//   name: "orange",
//   rating: 9,
//   review: "solid like the color"
// });
//
// const banana = new Fruit ({
//   name: "Apple",
//   rating: 8,
//   review: "solid fruit"
// });

//command inserts data into database
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(error);
//   }else {
//     console.log("SUCCESS");
//   }
// });

//find or query database for data
Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
