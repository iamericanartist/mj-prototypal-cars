"use strict";
console.log("main.js loaded");

/*Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()*/
function Car () {
  this.tires = [];
  // Create the manufactured date property (see above)
  this.manufactured_date = Date();  /*The Date.now() method returns the 
      number of milliseconds elapsed since 1 January 1970 00:00:00 UTC. 
      Date() returns human legible format.*/
}

/*Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.*/
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car
Make.prototype = new Car();


// ****************************************************** 
// 1. Create a new constructor function for the make of your favorite car.  Example:
    // function YourFavoriteMake (name) {
    //   this.modelName = name;
    // }
// 2. It must inherit from the general Make function.
    // YourFavoriteMake.prototype = new Make(...);
// 3. It must have one argument that will to hold the model name.
// 4. The constructor must define a property to hold the model name.
function Kia (name) {
  this.modelName = name;
}
Kia.prototype = new Make("Kia");


function LicensePlate(num){
  this.number = num;
  this.state = "TN";
}

function Sorento (plateNum) {
  this.plateNum = null;
  this.plate = new LicensePlate(plateNum);
}
// Set the prototype to appropriate model you created above and set the model name argument
Sorento.prototype = new Kia("Sorento");

var mySuv = new Sorento("345-KYP");
console.log("mySuv", mySuv);


// ****************************************************** 
//Tires prototype chain
function Tire() {
  this.shape = "round";
}

function Manufacturer (name){
  this.name = name;
}
Manufacturer.prototype = new Tire();

function tireType(type) {
  this.type = type;
  this.PSI = 0;
  this.radius = 0;
} 
tireType.prototype = new Manufacturer();
tireType.prototype.setPSI = function(newTirePSI){
  this.PSI = newTirePSI;
};
tireType.prototype.setRadius = function(inches){
  this.radius = inches;
};

var racing1 = new tireType("racing");
var racing2 = new tireType("racing");
var snowTire1 = new tireType("snow");
var snowTire2 = new tireType("snow");

mySuv.tires.push(racing1, racing2, snowTire1,snowTire2);

for (var i = 0; i < mySuv.tires.length; i++) {
  mySuv.tires[i].setPSI(32);
  mySuv.tires[i].setRadius(20);
}
console.log("These here tires are ", mySuv.tires);
// console.log("mySuv ", mySuv);
// console.log("mySuv tire #3 ", mySuv.tires[2]);
// console.log("mySuv.tires[0].PSI ",mySuv.tires[0].PSI);
// mySuv.tires[0].PSI = 22;

// ******************************************************
/*Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.*/
