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

let nazwa3 = (parametr1, parametr2) => parametr1 * parametr2;
console.log(nazwa3(3, 3));
