// "use strict";
// const country = "Poland";
// const continent = "Europe";
// let population = 36;
// const isIsland = false;
// let language;
// language = "Polish";

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} milion people and its capital city is ${capitalCity}`
  );
}

const polandDescribe = describeCountry("poland", 36, "warsaw");
const germanyDescribe = describeCountry("germany", 70, "berlin");
const usaDescribe = describeCountry("usa", 360, "washinton");

function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}

let polandPercentage = percentageOfWorld1(36);
let germanyPercentage = percentageOfWorld1(70);
let usaPercentage = percentageOfWorld1(360);

// console.log(polandPercentage, germanyPercentage, usaPercentage);

const percentageOfWorld2 = function (population) {
  let percentage = (population / 7900) * 100;
  return percentage;
};
let polandPercentage2 = percentageOfWorld2(36);
let germanyPercentage2 = percentageOfWorld2(70);
let usaPercentage2 = percentageOfWorld2(360);
// console.log(polandPercentage2, germanyPercentage2, usaPercentage2);

let percentageOfWorld3 = (population) => (population / 7900) * 100;
let polandPercentage3 = percentageOfWorld3(36);
let germanyPercentage3 = percentageOfWorld3(70);
let usaPercentage3 = percentageOfWorld3(360);
// console.log(polandPercentage3, germanyPercentage3, usaPercentage3);

function describePopulation(country, population) {
  return `${country} has ${population} milion people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}

// console.log(describePopulation("poland", 36));
