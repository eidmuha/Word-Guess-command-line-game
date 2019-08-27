var Letter = function(){
    // A string value to store the underlying character for the letter
    this.letter = '';

    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    // A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed
    this.guess = function(){
        return this.letter;
    }
    // A function that takes a character as an argument and checks it against the underlying 
    // character, updating the stored boolean value to true if it was guessed correctly
    this.checkChar = function(c){

    }

}

// exporting our Word constructor
module.exports = Letter;