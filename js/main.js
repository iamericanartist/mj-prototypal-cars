"use strict";
// console.log("main.js loaded");

function Car () {                         // Create a function named Car with one property named `manufactured_date` whose value will be Date.now()
  this.manufactured_date = Date();        // Create the manufactured date property (see above)
  this.tint = "black";
}

function Make (maker) {                   // Create a constructor function named Make with one argument that will hold the manufacturer of the Make (see below). 
  this.manufacturer = maker;              // Define a property `manufacturer` and assign the manufacturer property to the argument value.
}
Make.prototype = new Car();               // Set its prototype to a new instance of the Car function.


function LicensePlate(num, state){        // This is a CONSTRUCTOR FUNCTION for each cars license 
  this.number = num;
  this.state = state;
}



//////////////////////First Car
function Kia (name) {
  this.modelName = name;                  // 4. The constructor must define a property to hold the model name.
}
Kia.prototype = new Make("Kia");          // 2. It must inherit from the general Make function.     // YourFavoriteMake.prototype = new Make(...);    // 3. It must have one argument that will to hold the model name.


function Sorento (plateNum, state) {            // This is a Sorento CONSTRUCTOR FUNCTION
  this.tires = [];
  this.plate = new LicensePlate(plateNum, state);
}
Sorento.prototype = new Kia("Sorento LX");      // Set the prototype to appropriate model you created above and set the model name argument

var mySuv = new Sorento("345-KYP", "MN");
console.log("mySuv", mySuv);



//////////////////////Second Car
function Honda (name) {
  this.modelName = name;                      // 4. The constructor must define a property to hold the model name.
}
Honda.prototype = new Make("Honda");


function Accord (plateNum, state) {           // This is a Accord CONSTRUCTOR FUNCTION
  this.tires = [];
  this.seat = "buckets";
  this.plate = new LicensePlate(plateNum, state);
}
Accord.prototype = new Honda("Accord LX");    // Set the prototype to appropriate model you created above and set the model name argument

var EricsHonda = new Accord("asdf", "FL");
console.log("EricsHonda",EricsHonda);



//////////////////////Third Car
function Chevy (name) {
  this.modelName = name;                      // 4. The constructor must define a property to hold the model name.
}
Chevy.prototype = new Make("Chevy");


function Nova (plateNum, state) {             // This is a Nova CONSTRUCTOR FUNCTION
  this.tires = [];
  this.bodystyle = "Hatchback";
  this.plate = new LicensePlate(plateNum, state);
}
Nova.prototype = new Chevy("Nova");           // Set the prototype to appropriate model you created above and set the model name argument

var MomsChevy = new Nova("PaidFor", "TN");
console.log("MomsChevy",MomsChevy);



//////////////////////Tires Prototype Chain
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

mySuv.tires.push(racing1, racing2, snowTire1, snowTire2);
MomsChevy.tires.push(racing2, racing2, racing1, racing1);
EricsHonda.tires.push(racing1, racing2, snowTire1, snowTire2);

for (var i = 0; i < EricsHonda.tires.length; i++) {
  EricsHonda.tires[i].setPSI(59);
  EricsHonda.tires[i].setRadius(35);
}
for (var i = 0; i < mySuv.tires.length; i++) {
  mySuv.tires[i].setPSI(32);
  mySuv.tires[i].setRadius(20);
}
for (var i = 0; i < MomsChevy.tires.length; i++) {
  MomsChevy.tires[i].setPSI(30);
  MomsChevy.tires[i].setRadius(30);
}

console.log("mySuv tires are ", mySuv.tires[3]);
console.log("EricsHonda tires are ", EricsHonda.tires[3]);
console.log("MomsChevy tires are ", MomsChevy.tires[3]);
// console.log("mySuv tire #3 ", mySuv.tires[2]);
// mySuv.tires[0].PSI = 22;
// console.log("mySuv.tires[0].PSI ",mySuv.tires[0].PSI);
