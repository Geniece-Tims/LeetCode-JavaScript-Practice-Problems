// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//
// The three functions are:
//
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
* @param {integer} init
* @return { increment: Function, decrement: Function, reset: Function }
    */
var createCounter = function(init) {
    let num = init;
    return {
        increment: () => num = num + 1,
        reset: () => num = init,
        decrement: () => num = num - 1,
    };

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val2 !== val) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val2 === val) throw new Error("Equal");
            else return true;
        }
    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
/**
* @return {Function}
*/
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
//
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//
// Please solve it without the built-in Array.map method.
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        transformedElement = fn(arr[i], i);
        result.push(transformedElement);
    }
    return result;
};