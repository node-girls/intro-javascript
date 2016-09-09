//Level2

/* Arrays
    It is ordered list of values. It can keep any number of values inside. And also
    any type of values - numbers, strings, objects.
    Example:
    var animals = ['cat', 'dog', 'horse];
    var randomThings = [2, 'book', 'today is Saturday', 10];
    var numbers = [1, 2, 8, 19];
 */

//TODO: create your own array named favouriteFood and write in couple of things you like.

var favouriteFood = ['jk', 'jksf', 'hjl', 'dfsl'];

/* Array length
    We can easily check how many items we have in our array with property '.length'
    Example:
    var randomThings = [2, 'book', 'today is Saturday', 10];
    console.log(randomThings.length); //we will get 4
 */

//TODO: check up on how many values you have in your array favouriteFood and console.log it

console.log(favouriteFood.length);

/* Arrays usage
    So, it is comfortable to keep all this values in one place, but what if we want to use
    only 1 item from the array, we can get them out using 'bracket notation'.
    As all counting in programming starts with 0, the first element in the array will have
    position 0 etc
    Example:
    var randomThings = [2, 'book', 'today is Saturday', 10];
    var firstItem = randomThings[0];
    var secondItem = randomThings[1]; and so on
 */

//TODO: get 3d element from your array favouriteFood and console.log it

console.log(favouriteFood[2]);

/* Changing values in arrays
    We also can replace values inside of the arrays by assigning specific item from
    the array to a new value.
    Example:
    var animals = ['cat', 'dog', 'horse];
    //let's replace 'dog' with 'fish'
    animals[1] = 'fish';
    //now our animals array will be ['cat', 'fish', 'horse]
 */

//TODO: take your array favouriteFood and replace first value with anything else.
//console.log whole array to check

favouriteFood[0] = 'melon';
console.log(favouriteFood);

/* Adding values to array
    If you want to add new value to array you can use property of array named '.push'.
    It will add value to the end of the array
    Example:
    var animals = ['cat', 'dog', 'horse];
    animals.push('rabbit');
 */

//TODO: let's extend your list of favouriteFood and add one more value in it.
//console.log list of your food o check

favouriteFood.push('cherries');
console.log(favouriteFood);


/* Loops
    People always have been lazy and it was moving progress forward. We don't like repeat
    same boring actions again and again, so we are looking for the way how to improve it.
    Programming is the same - for example, if I want to print 'JavaScript is awesome!' 10
    times what are my options? Of course, I can print 10 lines of code repeating same
    phrase over and over again, but I also can tell computer to do it instead of me.
    To do it we have loops.
    Each loop should have 3 main things:
    - starting point
    - condition (finishing point)
    - counter (a step)
    If you miss one of them you can get into infinite loop!!!
 */


/* While loops
  'While' loop will do the action over and over again untill
  some condition will be met.
  For example:
  var number = 0;   //starting point
  while (number < 10) {      //10 is a condition/finishing point
    console.log('JavaScript is awesome!');
    number = number + 1;          // + 1 is a counter/size of the step
  }
 */

//TODO: Using 'while loop' tell your computer to print you numbers from 10 to 1

var num = 10;

while(num > 0) {
  console.log(num);
  num = num - 1;
}

/* For loops
    'For loop' is very similar to 'while loop', but you declare a counter in the statement.
    For example:
    for(var i = 0; i <= 5; i++){  //(starting point, condition, step)
      console.log('Purr');
    }
    PS: i++ is a short from 'i = i + 1'
 */

//TODO: now, let's print every 3d number from 3 to 22 using 'for loop'

for(var i = 3; i <= 22; i + 3){
  console.log(i);
}


/* Iterating through arrays
    Now, when we know about loops I want to use each value from my animal
    list and say that I love all of those animals, how shall I do it?
    We can use 'for loop' to iterate through our array and get each value from it.
    Example:
    var animals = ['cats', 'dogs', 'horses];
    for(var i = 0; i < animals.length; i++){
      console.log('I love ' + animals[i]);
    }
 */

//TODO: try it out with your list of favouriteFood that you created before.











/* Loops and Logic
    Now, when we know about if/else statements and loops let's combine them together
    and make something more interesting. Let's count from 10 to 0 and print all the
    numbers, but when we get to the middle(5) print ''WooHoo, we are in the middle'.
    Example:
    for(var i = 10; i > 0; i--){
      if(i == 5){
        console.log('WooHoo, we are in the middle');
      } else {
        console.log(i);
      }
    }
 */

//TODO: Time came for a classic exercise - 'FizzBuzz'. Count from 1 to 50 and print
// numbers out. If number multiple of 3 print 'Fizz', if multiple of 5 - 'Buzz', if
// it is multiple of 3 and 5 - 'FizzBuzz'.
//PS: you can use arithmetic operator modulo (%) - it is remainder when dividing.
//10 % 3 = 1 - so in 10 we have 3*3 + 1
//16 % 4 = 0 - as in 16 we have 4*4
//19 % 4 = 3 - as in 19 we have 4*4 + 3 etc
















//events - clicks etc
