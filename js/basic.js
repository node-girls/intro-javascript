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
    functionName(10);
    Now we will call our function with argument that is 10. And our function will return us 20. To see what our function
    returns us we can console.log it, for example.
 */

//TODO: It's your turn to create a function. 
//Step 1 - Name it add and pass in two argumnets (num1 and num2). 
//Step 2 - This function should return us a summ of num1 and num2. 
//Step 3 - Call the function with numbers 2 and 3. To see result you can alert it or console.log it - to be sure that it works right.

var add = function(num1, num2){
    return num1 + num2;
};

console.log(add(2, 3));


//TODO: Great, you made it! Now let's do another function named substract and pass 2 arguments num1 and num2.
//Call on it with numbers 5 and 1 and console.log the result.
//PS: do you know that instead of numbers you can create variables that store those numbers and pass them as an arguments to your function, try it up.

var firstNum = 5;
var secondNum = 1;

var substract = function(num1, num2){
    return num1 - num2;
};

console.log(substract(firstNum, secondNum));


/*If-else statements
    What if we want our program to make a decision which function it should run? In this case we can use conditions.
    If spider is big, action should be - run and save your life, but if it is tiny you can simply walk away.
    Same with code, you can give 'if' condition to machine to make a decision what part of code to run.
    Structure:
    if(condition){
        do this
    } else {
        do something else
    }
    Example:
    var number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else {
        console.log('Our number is smaller then 7');
    };
*/

/*Comparison operators
    You remember we were talking about arithmetical operators and that we have different operators in programming, so
    here comes time to introduce you comparison operators that we can use to compare two values(>, <, <=, =>, ==, !=).
    Most of them you know from math classes in school, some of them can be new for you, so '==' is checking equality, if two values are equal.
    '!=' - checks if they are not equal.
    PS: Don't mix up '=' and '==' as they have different meaning.
*/

//TODO: So now we have 2 functions from previous task - add and substract. Let's tell machine to decide what action to run
//depending on arithmetical operator(+,-,/, * etc). If operator is '+' we should use add function, else - substract function.
//Step 1, create a variable called operator and let it be equal to '-'
//Step 2, create if/else statement, pass any 2 arguments to your functions.
//Don't forget to console.log it to see the result


if(operator == '+'){
    console.log(add(10, 6));
} else {
    console.log(substract(4, 1));
};

/*If-else if-else
    Hm, but what if we have 4 arithmetical operations in our calculator? Well, we can use if - else if - else structure.
    Example:
    var number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else if (number < 7){
        console.log('Our number is smaller then 7');
    } else {
        console.log('Our number is equal to 7');
    };
*/


//TODO: Let's creat 2 more functions and name them divide and multiply. After that let's extand our if else check and see if 
// our operator is equal to '+' call add function, else if operator is equal to '-' call substract function, if it equal to 
// '/' call divide function, if it is '*' call multiply function, else console.log - Sorry, we don't know this operator.







