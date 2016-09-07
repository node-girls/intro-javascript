//Level 1

/* Comments.
    Let's start with comments - notes that people can read and computers will ignore.
    They will help us up to guide you through the javaScript introduction journey.
    There is a multi-line comments, like this one and also you can leave a single line comment
    right in your code, example below. If you need to write some notes use comments starting with '//'
*/

//I'm your one-line comment


/* Let's start with getting your code on the screen.
    There is few ways you can do it and we will look into few of them:
    - console.log('Hello World!'); - this line of code will print 'Hello World!' to the browser's console.
    P.S: To see browser's console you can do right click in the window of you browser(Chrome, Firefox etc)
    and select 'Inspect' or 'Inspect element' after that a console will appear on the bottom of the page.
    - alert('Hello girls!'); - this line of code will pop-up a small window in your browser with text 'Hello girls!' in it,
    but you need to refresh opened page first.
 */


//TODO: Now try to create an alert with any phrase you like.


alert('hello');


//TODO: After alert works for you, comment it out and refresh the page - it should not pop-up anymore.

//TODO: What you say about trying console.log your message to browser? Send any message you like.


console.log("I'm programming!");


/* Variables.
    Variable is a place to store information. To create(declare) a variable use a keyword 'var', as follows:
    var variableName;
    So, we created a variable named variableName, but it has no information/value inside, it is empty. To give value(initialize)
    to variable follow next step:
    variableName = 'Hello world!';
    We also can create and give value to variable in one step, as follows:
    var newVariable = 1;
    As you noticed we can give different types of values to our variables - strings, numbers, booleans etc.
    String - is a set of characters, word or phrase that we wrap into quotes, see 'hello world!' in previous task.
    Numbers - either integers or floats(decimals).
    Boolean - it represents logical values - True or False
 */

//TODO: Now create two empty variable named numberOne and numberTwo

var numberOne;
var numberTwo;


/*
    You also can use your variables to represent information that it has inside.
    Example:
    var hello = 'Hello World';
    alert(hello);
    It will pop-up alert box with string 'Hello World!'
 */

//TODO: Create 2 variables, 1 with your name and 2nd with your age and display them with alert pop-up box


var name = '..';
var age = 10;

alert(name);
alert(age);


//TODO: Don't forget to comment alerts if you don't want them to pop-up every time


/* Arithmetic operators
    There is a bunch of different operators in programming. We will look through arithmetical operators now.
    They are standard arithmetical operators (+, -, /, *, etc) that you can use to do math with your numbers.
    Example:
    var sumOfNumbers = 1 + 3;
    alert(sumOfNumbers);
    It will pop-up alert box with number 4
 */

//TODO: Create 3 variables, 1st variable named ten with value 10 inside, 2nd variable named three with value 3. And finally 3d variable named multipleOfNumbers that will be equal 1st variable multiply by 2nd variable. And in the end console or alert value of multipleOfNumbers

var ten = 10;
var three = 3;
var multipleOfNumbers = ten * three;
console.log(multipleOfNumbers);


/* Functions
    Function is a separable, reusable piece of code. Some action that you want to do. It takes some input(arguments), do some manipulation
    on it and return the output.
    To create a function you need do following:
    var functionName = function(argument){
        return argument * 2;
    };
    So, our function will take 1 argument and return argument multiplied by 2. But for now it will do nothing as we need to call for our function.
    To call the function we do so:
    var number = 10;
    functionName(number);
    Now we will call our function with argument equal to number variable that is 10. And our function will return us 20. To see what our function
    returns us we can console.log it, for example.
 */

//TODO: It's your turn to create a function. Step 1 - Name it addition and pass in two argumnets (num1 and num2). This function should return us a summ of num1 and num2. To see result you can alert it or console.log it - to be sure that it works right.

var addition = function(num1, num2){
    return num1 + num2;
};




//if/else


