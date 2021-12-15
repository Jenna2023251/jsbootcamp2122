//Import expressJS module
const express = require('express');

// Create an express application object
const app = express()

app.set("view engine", "ejs");


class GameMatch {
  constructor() {
    this.id = gameList.length + 1000;
    this.turn = 0; // this is the index of this.players whose turn it is
    this.players = [];
    this.round = 0;
  }
}

class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000;
    this.name = name
    this.race = race
    this.profession = profession
    this.equipment = {
      head: {},
      chest: {},
      legs: {},
      arm_p: {},
      arm_s: {}
    }
    this.inventory = []
    this.abilities = []
    this.stats = {
      attack: 39,
      defense: 39,
      speed: 5,
      hp_current: '∞',
      hp_max: '∞'
    }
    //This method searches for an item in the itme list with this name
    //And adds it to this character's inventory
    this.pickupItem = function(searchName) {
        console.log(this);
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("poggie woggies");
            this.inventory.push(item);
            break;
          }
        }
      },
      //This method searches for a given slot and overwrites
      //it with an empty object
      this.unequipItem = function(slot) {
        for (var slotName in this.equipment) {
          console.log(slotName);
          if (slotName == slot) {
            console.log("Removing - not so poggie woggies");
            this.equipment.slotName = {};
            break;
          }
        }
      }
  }
}


// Holds all possible items
var item_list = [{
    name: 'Diamond Pickaxe',
    slot: 'arm_p',
    bonuses: {
      attack: 16
    }
  },
  {
    name: 'Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];

// characterList[0].pickupItem('Diamond Pickaxe');
// characterList[0].unequipItem('arm_p');

// Create Character list with two default characters
var gameList = [];
var characterList = [];
characterList.push(new Character('Hatsune Miku', 'Human', 'Virtual Idol'))
characterList.push(new Character('Not Hatsune Miku', 'Human', 'Virtual Idol'))

// This code doesn't work for some reason T_T
//for (var character in characterList) {
  //character.pickupItem('Diamond Pickaxe');
//}

// Create a GET endpoint.
app.get('/game', (req, res) => {
  // Search for the game in the gameList.
  var foundGame = gameList.find(game => game.id == req.query.gameid)
  // If the game was found, we can manipulate it.
  if (foundGame) {
    // Check to see if the user sent the addcharacter query param (&addcharacter=xxxx) (1000 or something idk)
    if (req.query.addcharacter) {
    // Check to see if there is room in this game's player list to add a charcter
      if (foundGame.players.length < 2) {
        // Find the character with the given addcharacter id
        var foundProfile = characterList.find(character => character.id == req.query.addcharacter)
        // If the character exists, add its id to this game's character list
        if (foundProfile) {
          foundGame.players.push(foundProfile.id)
        }
      }
    }
    // Render a template called 'game' from the /views folder - send a variable called "sendData"
    res.render('game', {
      sendData: foundGame
    })
  } else {
    res.redirect('/newgame');
  }
});

// This endpoint creates a new character
app.get('/newgame', (req, res) => {
  //characterList.push(new Character('Hatsune Miku', 'Human', 'Virtual Idol'))
  gameList.push(new GameMatch());
  res.redirect('/game/?gameid=' + gameList[gameList.length - 1].id)
});
// Create a GET endpoint
// Change endpoint to include user's characterid
app.get('/profile', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.query.characterid)

  if (foundProfile) {
    // Render a template called 'profile' from the /views folder - send a variable called "sendData"
    res.render('profile', {
      sendData: foundProfile
    })
  } else {
    res.redirect('/newprofile');
  }
});
app.get('/newprofile', (req, res) => {
  //characterList.push(new Character('Hatsune Miku', 'Human', 'Virtual Idol'))
  characterList.push(new Character(characterList.push(new Character('Hatsune Miku', 'Human', 'Virtual Idol'))));
  res.redirect('/profile/?characterid=' + characterList[characterList.length - 1].id)
});


//Start an http listen server
app.listen(3000);
