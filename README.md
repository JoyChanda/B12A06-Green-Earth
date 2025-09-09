
## Readme

## What is the difference between var, let, and const?

**Answer:**   
#### var:
"var" is the oldest way to declare a variable in JavaScript. Variables declared with "var" have a function-level scope, meaning they are only accessible within the function in which they were declared. They also have "hoisting" behavior, which means they are accessible throughout the entire scope of the function, regardless of where they were declared.

#### let:
"let" is a syntax change introduced in ECMAScript 6, replacing "var". It allows variable declarations with block-level scope and the temporal dead zone.

#### const:
ECMAScript 6 introduced "const" variables for declaring fixed-value constants, such as pi or the gravitational constant, with block-level scope and not accessible before declaration.

## What is the difference between map(), forEach(), and filter()?

**Answer:**   
#### .map():
.map() executes the same code on every element in an array and returns a new array with the updated elements.

#### .forEach:
.forEach(), is used to execute the same code on every element in an array, but does not change the array, and it returns undefined.

#### .filter():
.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

## What are arrow functions in ES6?

**Answer:**  
ES6 Arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organised. The arrow functions are introduced in the ES6 version. Arrow functions provides us with a more precise approach to writing JavaScript Functions.


## How does destructuring assignment work in ES6?

**Answer:**   
Destructuring is a technique that allows you to unpack values from arrays or objects into separate variables.
It makes it easier to extract values from arrays or properties from objects and assign them to variables in a readable way.


#### Without destructuring, extracting values from an array can be verbose:

const hobbies = ["Reading", "Coding", "Hiking"]; <br>
const firstHobby = hobbies[0];<br>
const secondHobby = hobbies[1];<br>
const thirdHobby = hobbies[2];<br>
console.log(firstHobby); // Output: Reading<br>
console.log(secondHobby); // Output: Coding<br>
console.log(thirdHobby); // Output: Hiking<br>

#### Destructuring simplifies this process into a single line of code, like this:

const hobbies = ["Reading", "Coding", "Hiking"];<br>
const [firstHobby, secondHobby, thirdHobby] = hobbies;<br>
console.log(firstHobby); // Output: Reading<br>
console.log(secondHobby); // Output: Coding<br>
console.log(thirdHobby); // Output: Hiking<br>

#### Object Destructuring Example:

const person = { name: "Alice", age: 25, city: "Dhaka" };<br>
const { name, age, city } = person;<br>
console.log(name); // Output: Alicev<br>
console.log(age);  // Output: 25<br>
console.log(city); // Output: Dhaka<br>

## Explain template literals in ES6. How are they different from string concatenation?

**Answer:**  
 Template literals are a new feature that was introduced in ECMAScript6, which offers a simple method for performing string interpolation and multiline string creation.

The template literals were called template strings before the introduction of ES6. Starting from ES6 (ECMAScript 6), we have Template Literals which are indicated by the backtick (`....`) character. Template literals can also be used to hold the placeholders, that are indicated by the '$' sign and the {}  braces such as (${expression}).

#### Difference from string concatenation:
String concatenation joins strings using +, e.g., "happy" + "holiday" → "happy holiday". Template literals provide a cleaner and easier way to include variables or expressions directly in strings, serving as a more readable alternative.

