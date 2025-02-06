// // // JAVASCRIPT FUNDAMENTAL 1

// // // ASSIGNMENTS

// // // ASSIGNMENT 1 - VALUES AND VARIABLES

// // // let country = "Nigeria";
// // // let continent = "Africa";
// // // let population = 20;

// // // console.log(country, continent, population);

// // //ASSIGNMENT 2 - DATA TYPE

// // // let isIsland = false;
// // // let language;

// // // console.log(typeof country);
// // // console.log(typeof population);
// // // console.log(typeof isIsland);
// // // console.log(typeof language);

// // // ASSIGNMENT 3 - LET, CONST & VAR

// // // language = "English";

// // // const isIsland = false;
// // // const country = "Nigeria";
// // // const continent = "Africa";

// // // ASSIGNMENT 4 - BASIC OPERATORS -MATHEMATICAL, ASSIGNMENT, INCREMENT, DECREMENT, COMPARISON OPERATORS.

// // // let halfPopulation = population / 2;
// // // population++;
// // // console.log(population);
// // // let isMoreThanFinland = population > 6;
// // // console.log(isMoreThanFinland);
// // // let isMoreThanAverage = population > 33;
// // // console.log(isMoreThanAverage);
// // // let description =
// // //   country +
// // //   " is in " +
// // //   continent +
// // //   ", and its " +
// // //   population +
// // //   " speak " +
// // //   language;
// // // console.log(description);

// // //ASSIGNMENT 5 - STRING AND TEMPLATE LITERALS
// // // description = `${country} is in ${continent}, and its ${population} speak ${language}.`;
// // // console.log(description);

// // //ASSIGNMENT 6 - TAKING DECISIONS - IF/ELSE STATEMENTS

// // // if (isMoreThanAverage) {
// // //   console.log(`${country}'s population is more than average`);
// // // } else {
// // //   console.log(`${country}'s population is less than average`);
// // // }

// // //ASSIGNMENT 7 - TYPE CONVERSION & COERCION

// // // console.log(typeof Number("22"));

// // // console.log("9" - "5"); // -> ?
// // // console.log("19" - "13" + "17"); // -> ?
// // // console.log("19" - "13" + 17); // -> ?
// // // console.log("123" < 57); // -> ?
// // // console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?

// // // ASSIGNMENT 8 - EQUALITY OPERATORS : == vs. ===

// // // const numNeighbours = Number(
// // //   prompt("How many neighbour countries does your contry have?")
// // // );

// // // if (numNeighbours === 1) {
// // //   console.log("Only 1 border!");
// // // } else if (numNeighbours > 1) {
// // //   console.log("More than 1 border");
// // // } else {
// // //   console.log("No borders");
// // // }

// // //ASSIGNMENT 9 - LOGICAL OPERATORS

// // // if (language === "English" && population < 50 && !isIsland) {
// // //   console.log(`You should live in ${country} :)`);
// // // } else {
// // //   console.log(`${country} does not meet your criteria :(`);
// // // }

// // // NULLISH COALESCING OPERATOR -
// // // It returns, the right hand operand only if the left hand operand is null or undefined.
// // // syntax : console.log(null ?? "Right"); -- will return "Right"
// // // console.log("Left" ?? "Right"); -- will return "Left"

// // //ASSIGNMENT 10 - THE SWITCH STATEMENT

// // // switch (language) {
// // //   case "Chinese":
// // //   case "Mandarin":
// // //     console.log("MOST number of native speakers!");
// // //     break;
// // //   case "Spanish":
// // //     console.log("2nd place in number of native speakers");
// // //     break;
// // //   case "English":
// // //     console.log("3rd place");
// // //     break;
// // //   case "Hindi":
// // //     console.log("Number 4");
// // //     break;
// // //   case "Arabic":
// // //     console.log("5th most spoken language");
// // //     break;
// // //   default:
// // //     console.log("Great language too :D");
// // // }

// // //ASSIGNMENT 22 - THE CONDITIONAL (TERNARY) OPERATOR
// // // console.log(
// // //   `${country}'s population is  ${population > 33 ? "above" : "below"} average`
// // // );

// // // CODING CHALLENGES

// // // CODING CHALLENGE 1

// // const markWeight = 78;
// // const markHeight = 1.69;
// // const johnWeight = 92;
// // const johnHeight = 1.95;

// // const markBMI = markWeight / markHeight ** 2;
// // const johnBMI = johnWeight / johnHeight ** 2;

// // const markHigherBMI = markBMI > johnBMI;

// // console.log(markBMI, johnBMI, markHigherBMI);

// // // CODING CHALLENGE 2

// // if (markHigherBMI) {
// //   console.log(`Mark's BMI(${markBMI}) is higher than John's!(${johnBMI})`);
// // } else {
// //   console.log(`John's BMI(${johnBMI}) is higher than Mark's!(${markBMI})`);
// // }

// // // CODING CHALLENGE 3

// // // DATA 1
// // // const averageScoreDolphins = (96 + 108 + 89) / 3;
// // // const averageScoreKoalas = (88 + 91 + 110) / 3;

// // // DATA 2
// // const averageScoreDolphins = (97 + 112 + 101) / 3;
// // const averageScoreKoalas = (109 + 95 + 123) / 3;

// // // DATA 3
// // // const averageScoreDolphins = ( 97 + 112 + 101.) / 3;
// // // const averageScoreKoalas = (109+ 95 + 106) / 3;

// // console.log(averageScoreDolphins, averageScoreKoalas);

// // if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
// //   console.log(`Dolphins wins the trophy!`);
// // } else if (
// //   averageScoreKoalas > averageScoreDolphins &&
// //   averageScoreKoalas >= 100
// // ) {
// //   console.log(`Koalas wins the trophy!`);
// // } else if (
// //   averageScoreDolphins === averageScoreKoalas &&
// //   averageScoreDolphins >= 100 &&
// //   averageScoreKoalas >= 100
// // ) {
// //   console.log(`It's a tie!`);
// // } else {
// //   console.log(`no winner`);
// // }

// // // CODING CHALLENGE 4

// // const bill = 275;

// // let tip;

// // if (bill >= 50 && bill <= 300) {
// //   tip = bill * 0.15;
// //   console.log(
// //     `The bill was ${bill}, the tip was ${tip}, and the total value ${
// //       bill + tip
// //     }`
// //   );
// // } else {
// //   tip = bill * 0.2;
// //   console.log(
// //     `The bill was ${bill}, the tip was ${tip}, and the total value ${
// //       bill + tip
// //     }`
// //   );
// // }

// let testVariable;

// if (true) {
//   testVariable = "test-1";
// }

// console.log(testVariable);

// console.log(true * 8 - true * 9);

// console.log(Number(false));

let bill = 430;
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
