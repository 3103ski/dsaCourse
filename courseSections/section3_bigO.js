//------------
//------------
//-- Section 3: Big O
//------------
//------------

// ••••••••••••••••••••••••••
// ••••••••••••••••••••••••••
// --> 28. What is good Code
// ••••••••••••••••••••••••••
// ••••••••••••••••••••••••••

/*
• What matters most is not just if a problem gets solved, but how well it gets solved.

What is good code? 

1. Readable: Is the code generally clean and understandable
2. Scalable: Big O helps us measure this idea of how scalable code is. 
*/

// --> Example 1

// const nemo = ['nemo'];

// function findNemo(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'nemo') {
// 			console.log('Found Nemo!');
// 		}
// 	}
// }

// findNemo(nemo);

// Note: Why this example? This is an instruction. Our runtime. How long does it take to run a certain problem through a function. How can we measure the Big O of something like this?

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> 29. Big O & Scalability
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••

// >>>>>LESSON CODE START
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const largeArr = new Array(10000).fill('nemo');

// function findNemo(arr) {
// 	// In JS we have a special function that helps us measure
// 	let t0 = performance.now();
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'nemo') {
// 			console.log('Found Nemo!');
// 		}
// 	}
// 	let t1 = performance.now();
// 	console.log(`The call to find nemo took ${t1 - t0}ms`);
// }

// findNemo(largeArr);
// >>>>>LESSON CODE END

//
//
//
//

/**
 * NOTES:
 *
 * • As we made the array larger, we noticed that the runtime increased. The 'everyone' array took less than a millisecond, by the time we reached 10,000 items in the array it took 1.17s
 * • Every time we run this code it will be different. It considers many factors included how much is running ont he computer, how fast the computer is, etc.
 * • How can we measure in terms of efficiency, what is good code and what is bad cod?
 * • BigO notation is the language we use to describe how long it takes an algorithm to run.
 *
 * >> BigO Complexity
 *
 * O(n!) = Horrible
 * O(2^n) = Horrible
 * O(n^2) == Horrible
 * O(n log n) = Bad
 * O(n) = Fair
 * O(log n) = Good
 * O(1) = Excelent
 *
 * When we grow bigger and bigger with our input. How much does the algorithm or function slow down?
 * When the elements increases, how many more operations do we have to do?
 * This is algorithmic efficiency. Big O helps explain this concept
 *
 */

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> 30. O(n)
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••

// const largeArr = new Array(10000).fill('nemo');

// function findNemo(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'nemo') {
// 			console.log('Found Nemo!');
// 		}
// 	}
// }

// findNemo(largeArr);

/**
 * NOTES
 * ------
 * What would We say the BigO of findNemo is?
 * A runtime is simply how long something takes to run.
 * How does this runtime grow as our input increases
 *
 * The loop inside our function, as it is currently written, will run as many times as there are items in the array.
 * e.g.
 * 4 items = 4 operations
 * 5 items = 5 operations
 * 6 items = 6 operations
 *
 * This growth is linear.
 *
 * So we can say, findNemo function has a bigO of O(n); also called "Linear Time" --> "it takes linear time to find Nemo"
 *
 * The 'n' in the notation above is an arbitrary variable given to represent that input to O.
 * So if we have 4 items ==> O(4)
 * So if we have 5 items ==> O(5)
 * So if we have 6 items ==> O(6)
 * So if we have 10000 items ==> O(10000)
 *
 * The number of operations grows linearly
 *
 * --> O(n) - Linear Time   (The most common)
 *
 */

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> 31. O(1)
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••

const items = [1, 2, 3, 4, 5];

// function compressFirstItem(array) {
// 	console.log(array[0]);
// }

function logFirstTwoItems(array) {
	console.log(array[0]); // O(1)
	console.log(array[1]); // O(1)
}

logFirstTwoItems(items); // O(2)

/**
 * NOTES
 * ------
 *
 * •• compressFirstItem function
 *
 * No matter how many items are in the array, it will always just print the first.
 * This is what we would call O(1), or "Constant Time"
 * There is always the same amount of operations at runtime
 *
 * In terms of scalabilty, it doesn't matter how big our inputs are. we will always do the constant amount of times.
 *
 * It doesn't matter if it is O(2) or O(100), we will simplify the concept by always calling it O(1)
 *
 * We love O(1) for its constant time. We are always doing the constant time of a function.
 * It is very scalable. No no matter how many elements we have, it is always going to run the same.
 *
 */

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> Exercise 1
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
function anotherFunction() {
	return null;
}

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	// O(n)  --> Loops are lineaer time
	for (let i = 0; i < input.length; i++) {
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}

	return a; // O(1)
}

// [X] WRONG --> My answer: O(n); Because the amount of operations the loop will do at runtime depends on the size of the array expected as input

/**
 * CORRECT ANSWER
 *
 * 3 steps,
 * 3 + n + n + n + n
 *
 * O(3 + 4n)
 */

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> Exercise 2
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; //O(1)
	let c = 50; // O(1)

	// O(n) for first loop
	for (let i = 0; i < input; i++) {
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}

	// O(n) for second loop
	for (let j = 0; j < input; j++) {
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}

// My answer: O(4 + 7n)

// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// --> 36. Simplifying BigO
// --> 37. Rule 1
// --> 38. Rule 2
// --> 39. Rule 3
// --> 40. (n^2)
// --> 41. Rule 4
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••
// •••••••••••••••••••••••••••••

/**
 * Usually when in an interview, there is a set of rules you are going to follow
 * You will most likely not be asked to mark out complexity in the way we answered above; eg. O(4 + 7n)
 *
 * Most of the time you are only going to give one of the answers from the complexity list around line 76
 *
 * The answers from the above exercise, O(3 + 4n) and O(4 + 7n), will simplify to O(n)
 *
 * Simplify with the following rules
 *
 * ••••••••••••••••••••••••••••••••
 * -->>> Rule 1: Worst Case
 * ••••••••••••••••••••••••••••••••
 *
 * When calculating bigO, we always consider the worst case.
 * In the findNemo function, we can add a 'break' to get out of the loop in the case that Nemo is the 4/10 item, nemo may also be the 1/10, or worse case, the 10/10th item.
 * We can't evaluate scalability assuming things are always going to work out the best case. fundNemo may be O(1) if nemo is the 1/10th item. But, since we don't know how long
 * the array is or where nemo will be in that array, we evaluate the worse case and mark it O(n)
 *
 *
 * ••••••••••••••••••••••••••••••••
 * -->>> Rule 2: Remove constants
 * ••••••••••••••••••••••••••••••••
 *
 * function someFunc(items) {
 *      console.log(items[0])
 *      let y = Math.floor(items.length / 2)
 *      let index = 0
 * 
 *      while (index < y) {
 *          console.log(items[index])
 *          index++
 *      }

 *      for (let i = 0; i < 100; i++) {
 *          console.log('hello')
 *      }
 * }
 *
 *  We may think the above should be something like: O(2 + n/2 + 100)
 *
 *  However, when we think in terms of n, if it scales, that is always going to make the biggest differents, counting what scales. certain 100 operations every time does
 * `not matter much when n is a million. Furthermore, if n is 50 and hald is 25, another input could well be 100 and half is 50; considering the math on n is also not worth mentioning.
 * `The above function would simplify to: O(n)
 *
 *
 */
