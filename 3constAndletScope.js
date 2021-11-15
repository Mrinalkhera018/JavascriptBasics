
//scope iside function
var winner = true;

function user()
{
   var winner = false; //but if winner = false without var then the global scope console will also print false
   console.log(winner);
   
}
user();
//this will always take the global scope even if its called after the function
console.log(winner);

//scope inside if statement
var value = 10
var winner=true;
if(value==10)
{
  var winner = false;
}
console.log(winner); //now ewill print false;

//using const and let
const value = 10
let winner = true
if(value==10)
{
    let winner = false
}
console.log(winner);// with let inside : print true, without let : print false
