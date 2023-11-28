//---------------------------------Question 02---------------------------
// declare the circle radius and sting and do following methods

class Circle {
    constructor(radius,color) {
    this.radius = radius;
    this.color =color;
}  
getradius() {
    return `radius: ${this.radius}` ;
}
 set changeRadius(newRadius){
 this.radius = newRadius;
}
getcolor(){
    return`color: ${this.color}`;
}
set changeColor(newColor){
    this.color = newColor;
}
}
var circle =new Circle(1.0,"red");
circle.changeRadius = 4.0;
circle.changeColor = "green";
console.log(circle.getradius());
console.log(circle.getcolor());
