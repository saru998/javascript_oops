//Polymorphism one name many form functions

var game = function () { }
game.prototype.select = function () {   //abstract method
    return "i love games and sports"
}


var cricket = function () { }
cricket.prototype = Object.create(game.prototype);
cricket.prototype.select = function () {                //  overridden the select method to display      {                                                         new string.  
    return "i love cricket"
}


var tennis = function () { }
tennis.prototype = Object.create(game.prototype);  // overridden the select method to display new string         
tennis.prototype.select = function () {
    return "i love tennis"
}

var football = function () { }
football.prototype = Object.create(game.prototype);  // shared parent property

var games = [new game(), new cricket(), new tennis(), new football()];
games.forEach(function (game) {
    console.log(game.select());
});

