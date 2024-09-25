//1  Create a var that stores the name that user enters via prompt 
 var name = prompt ("What is your name?")

 //2 Capitalise the first letter of their name

// 2a Isolate the first char
var firstChar = name.slice(0.1);

//2b turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();


//2c1 Isolate the rest of the name
var restOfName = name.slice(1, name.length)

//2c2 Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();

//4d Concatenate the first char with the res of the char
var capitalisedName = upperCaseFirstChar + restOfName

 //3 We use the capitalize version of their nameto greet them  using an alert
alert("Hello, " + capitalisedName)
