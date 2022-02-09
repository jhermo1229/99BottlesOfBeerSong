function Animal(name, species, noise) {
  this.name = name;
  this.species = species;
  this.noise = noise;
}

Animal.prototype.sound = function () {
  return `${this.name} the ${this.species} says: ${this.noise}`;
};

Animal.prototype.say = function (message) {
  return `${this.name} the ${this.species} says: ${message}`;
};

duck = new Animal("Donald", "Duck", "Aw, Phooey!");
rabbit = new Animal("Buggs", "Bunny", "What's up Doc?!");
human = new Animal("John", "Human", "Oh boy, Pizza! Yum!");
console.log(duck.sound());
console.log(rabbit.sound());
console.log(human.sound());
console.log(duck.say("Coding is fun!"));
console.log(rabbit.say("Coding is fun!"));
console.log(human.say("Coding is fun!"));
