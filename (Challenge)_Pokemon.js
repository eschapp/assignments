// write a class/Constructor
// called Pokemon() that has
//
// - an init method
// - a reader method
// - a private variable
// - and a static method

// -------- BONUS
// write it a second way
// with ES6


  // Constructor
  function Pokemon(name) {
    this.attackPoints = 100;
    this.hitPoints = 100;
    this.name = 'Anonymous Pokemon';
  }
  Pokemon.prototype.run = function() {
    console.log(this.name + " is ready to battle!");
  };
  Pokemon.prototype.stats = function() {
    console.log('Attack Points: ' + this.attackPoints);
    console.log(this.name + ' has ' + this.hitPoints + ' hit points.' );
  };

  function Pikachu() {
    this.attackPoints = 200;
    this.hitPoints = 89;
    this.children = [];

  }

  Pikachu.prototype = Pokemon.prototype;


  var pikabee = new Pikachu();
  pikabee.name='Pikabee';
  pikabee.thunderbolt = function() {
    console.log('USE: THUNDERBOLT');
  };
  pikabee.setChildren = function(pokemon) {
    this.children.push(pokemon);
  };
  pikabee.run();
  pikabee.stats();
  pikabee.thunderbolt();

  var pikapee = Object.create(pikabee);
  pikapee.name = 'Pikapee';
  pikapee.thunderbolt();
  pikabee.setChildren(pikapee);
  console.log(pikabee.children[0].name);

  // Sanity check tests
  var pokemon1 = new Pokemon();
  console.assert(pokemon1.name==='Anonymous Pokemon');
  console.assert(typeof pikabee.thunderbolt === 'function');
  console.assert(typeof pokemon1.thunderbolt === 'undefined');
  // Thunderbolt





// -------- BONUS
// write it a second way
// with ES6
