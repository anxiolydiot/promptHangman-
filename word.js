var Letter= require("./letter.js'";
  var Word = function(wrd){
    this.word= wrd;
    this.lets= [];
    this.found= false;
    this.getLets = function(){
      for (i=0; i <= wrd.length; i++) {
        this.lets.push(new Letter(wrd[i])); 


    };
  },
  this.checkIfLetterFound = function (guessLetter){
    var letterFound = 0;
    var chars = this.lets[i];
    for (i = 0; i <this.lets.length; i++){
      if (chars.charac === guessLetter){
          chars.appear === true;
          letterFound ++;


      }
    }

    return letterFound;
    



  
    }
