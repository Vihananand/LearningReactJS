//Logical Operators
function getName(name){
    return name;
}

let a = false;
let b = false;

console.log(a && b); //If the first value is true then only it will check the other value otherwise if it gets first value as false it will never move to second value

console.log(a && getName("Vihan Anand")); //If the first value is true then only it will check the other value otherwise if it gets first value as false it will never move to second value

console.log(a || getName("Vihan Anand")); //Doesn't matter if the first value is true or false it will check the other value always

//-----------------------------------------------------------------------------------------
//Template Literals
let s1 = "Nancy";
let s2 = "Kumari";

console.log(`${s1} ${s2}`);

//------------------------------------------------------------------------------------------

const showRecipeOne = true;

function getRecipeOne(recipe){
    return recipe;
}
function getRecipeTwo(recipe){
    return recipe;
}

if(showRecipeOne){
    console.log(getRecipeOne("Pizza"));
}
else{
    console.log(getRecipeTwo("Burger"));
}

//Ternanry Operators
showRecipeOne
    ? console.log(getRecipeOne("Pizza"))
    : console.log(getRecipeTwo("Burger"));

//---------------------------------------------------------------------------------------

const id = 2589;
const productName = "Apple Watch";
const rating = 4;

const product1 = {
    id, productName, rating //This is a shorthand property by which it accept the const from above and you dont need to always assign value to it using :
};

const product2 = {
    description: "Product 2 description", id, productName, rating
};

const {description} = product2; //derefrencing the object (short hand method)

console.log(description);

//------------------------------------------------------------------------------------------
//Arrays
let arr = [1, 2, 3];

const [firstElement, 
    secondElement, 
    thirdElement] = arr; //Shorthand for accessing array elements

console.log(thirdElement);

//-------------------------------------------------------------------------------------------
//Default Parameters, Spread and Rest Operators

function multiplication(num1 = 3, num2 = 6){ //these are the default parameters so if anything is not passed then the compiler will take these default arguments
    return num1 * num2;
}

console.log(multiplication());
console.log(multiplication(20, 40));

array1 = [2, 3, 4]; 
array2 = [12, 13, 14]; 

console.log(...array1); // ... is a aspread operator it just spreads the value of array1
console.log([...array2]); // If we want to spread the value in form of another array
console.log([...array1, ...array2]); //It will spread the elements of both the arrays and will merge it
console.log([100, ...array1, ...array2, 23]) //It will add 100 as first element and 23 as the last element
//--------------------------------------------------------------------------------------------
