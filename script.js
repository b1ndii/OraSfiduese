// var personi = {
//     emri: "Arben",
//     Mosha: "30",
//     Adresa: "Shqiperi",
//     ndryshoAdresen: function() {
//         this.Adresa = prompt ("Si doni ta keni adresen?")
//         console.log("Adresa e re eshte: " + this.Adresa)
//     }
// }

// personi.ndryshoAdresen()
// console.log(personi.emri + personi.Mosha + personi.Adresa)



// var numrat = [
//     10, 20, 30, 40, 50
// ]
// numrat.push(60)
// numrat.splice(2,1)

// const index = numrat.indexOf(40);

// console.log(numrat)
// console.log("numri " + numrat[2] + " eshte ne pozicionin " + index)



var numrat = [3, 5, 7, 3, 9, 5, 11, 7, 3]

var map = numrat.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});

console.log(map)