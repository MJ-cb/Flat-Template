function Person(name, color){
    this.name = name;
    this.color = color;
    this.greet = function(){
    console.log("Oh Hello my name is " + this.name + " and my favorite color is: " + this.color);
   }

}
module.exports = Person;