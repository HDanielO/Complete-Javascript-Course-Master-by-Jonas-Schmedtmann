"use strict";
// Function is a reusable programming construct that can take in data(via parameters), execute code and return data.

// CODING CHALLENGE 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas} )`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins} )`);
//   } else {
//     console.log("unknown");
//   }
// }

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

// CODING CHALLENGE 2

// function calcTip(bill) {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// console.log(calcTip(100));

// const bill = new Array(125, 555, 44);
// const tip = new Array(calcTip(125), calcTip(555), calcTip(44));
// const total = new Array(bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]);

// console.log(bill, tip, total);

// CODING CHALLENGE 3

// const markDetails = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnDetails = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// markDetails.calcBMI();
// johnDetails.calcBMI();

// console.log(
//   `John's BMI (${johnDetails.bmi}) is ${
//     johnDetails.bmi > markDetails.bmi ? "higher" : "lower"
//   } than Mark's (${markDetails.bmi})`
// );

// I wanted to add a condition to test if the bmi were equal but I couldn't think of a way to do so...maybe in the future I will

// CODING CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// so i wanted to create a function for tips...and for total that will take an array of any bills..hence they can be reuseable...

// function calcTip(bill) {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(bills, tips, totals);

//resusable

//

// BONUS

// function calcAverage(avr) {
//   let avrTot = 0;
//   for (let i = 0; i < avr.length; i++) {
//     avrTot += avr[i];
//   }
//   return avrTot / avr.length;
// }

// calcAverage([1, 2, 3]);

// console.log(calcAverage([1, 2, 3]));


