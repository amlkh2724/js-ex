// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:


class Pokemon {
    constructor(pokemonName, pokemonType, pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;

    }
}


Pokemon.prototype.callPokemon = function () {
    return `I choose you,  ${this.name}`;

}

let pokemon1 = new Pokemon("Pikachu", "weird", ["Thunderbolt", "Quick Attack", "Iron Tail"]);
let pokemon2 = new Pokemon("Charizard", "speed", ["Flamethrower", "Dragon Claw", "Wing Attack"]);
let pokemon3 = new Pokemon("Squirtle", "fire", ["Bubble", "Water Gun", "Skull Bash"]);



Pokemon.prototype.attack = function(attackNumber) {
    return `${this.name} used ${this.attackList[attackNumber]}`;
  };
  


console.log(pokemon1.callPokemon());
console.log(pokemon1.attack(0));


console.log(pokemon2.callPokemon());
console.log(pokemon1.attack(0));


console.log(pokemon3.callPokemon());
console.log(pokemon1.attack(0));
