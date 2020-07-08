// without rest function passing two arguments
function add(x, y) {
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
function add(...nums) {
  console.log(nums); //[1, 1, 4, 5]; for final call
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

add(1); // => 1
add(3, 3); // => 6
add(1, 1, 4, 5); // => 11


function saySomething(arg1, arg2, ...allOther){
	//a rest paramter has to be the last argument in params
	var one = arg1;
	var two = arg2;
	var restArray = allOther;
}
saySomething("kelechi", "ayla", "kimchi")

// 2. 
function howManyArgs(...args) {
  console.log(args);
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]


const firstArr = [{name: "Farley"}, {name: "Asher"}, {name: "Mr, Snugggles"}];

const secondArr = [...firstArr];

secondArr[0].nickname = "Furball";

console.log("firstArr");
console.log(firstArr);
// [
//   { name: 'Farley', nickname: 'Furball' },
//   { name: 'Asher' },
//   { name: 'Mr, Snugggles' }


// ]

firstArr.push({name: "Jerome"});

console.log("secondArr");
console.log(secondArr);
// [
//   { name: 'Farley', nickname: 'Furball' },
//   { name: 'Asher' },
//   { name: 'Mr, Snugggles' },
//   {name: "Jerome"}
// ]

secondArr.push({name: "Jerome"})

firstArr[3] = secondArr[3]



const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂

const objectFive = {...objectFour, hello: "World"}
console.log(objectFive);//{hello: "World", world: "🐻", laugh: ƒ}




