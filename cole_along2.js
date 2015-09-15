var owner= {
  firstName: 'Spike',
  lastName:'Spiegel'};

var ride={
  make:'Yamaha',
  model:'V-Star Silverado 1100',
  year: 2005,
  purchased: Date,
  owner,
  product
};
function product (){
  return ride.model;
}
var JSONride = JSON.stringify(ride);
console.log(JSONride);
// function Ride () {
//   this.make='Yamaha';
//   this.model='V-Star Silverado 1100';
//   this.year= 2005;
//   this.purchased= Date;
//   var owner= {
//     firstName:'Spike',
//     lastName:'Spiegel'
//   };
// }
//
// Ride.prototype.product(){
//   return this.make;
// }
