var Letter = function (let){
 this.charac = let;
 this.appear = false;
 this.letterRender = function(){
  if (this.Charac ===false){
    console.log("_")

  }
  else{

      console.log(this.charac)
    }
 }
} 

module.exports = Letter;