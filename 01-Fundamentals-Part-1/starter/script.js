const country = "Poland";
const continent = "Europe";
let population = 36;
const isIsland = false;
let language;
language = "Polish";
const description = `${country} is in ${continent}, and its ${population} milions people speaking ${language}`;

// console.log(description);

//Coding challenge #1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

//Coding challenge #2
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI} is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})`);
// }

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// const numNeighbours = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );
// if (numNeighbours === 1) {
//   console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

// if (language === "English" && population < 50 && isIsland === false) {
//   console.log(`You should live in ${country}`);
// } else console.log(`${country} does not meet your criteria :(`);

// const dolphinsAvg = (97 + 112 + 101) / 3;
// const koalasAvg = (109 + 95 + 106) / 3;
// if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//   console.log("There is a draw");
// } else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//   console.log("The winner is Dolphins");
// } else if (koalasAvg >= 100) console.log("The winner is Koalas");

// const day = "friday";

// if (day === "wednesday" || day === "thursday") {
//   console.log(`its wednesday or thursday`);
// } else if (day === "friday") {
//   console.log(`it's friday`);
// }

// switch (language) {
//   case `chinese`:
//   case `mandarin`:
//     console.log(`MOST number of native speakers!`);
//     break;
//   case `spanish`:
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case `english`:
//     console.log(`3rd place`);
//     break;
//   case `hindi`:
//     console.log(`Number 4`);
//     break;
//   case `arabic`:
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log(`great language too :D`);
// }

// console.log(
//   `${country} population is ${population > 33 ? "above" : "below"} average`
// );

//Coding challenge #4
const bill = 430;
const tip = bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
