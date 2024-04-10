// Define receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Define returnsANamedFunction function
function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
        // Function body
    };
}

// Define returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Function body
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
