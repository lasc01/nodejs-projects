const superheroes = require("superheroes");

const supervillains = require("supervillains");

var heroesNames = superheroes.random();

var villainsNames = supervillains.random();

console.log(heroesNames + " vs " + villainsNames);

