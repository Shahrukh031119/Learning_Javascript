// javascript:
//              • is a just-in-time compiled programming lang. 
//              • uses first class functions.
//              • prototype based
//              • multi paradigm
//              • single-threaded
//              • dynamic-typed
//              • supports oop, imperative & declarative styles
//              • uses ECMA-262, ECMA-402 standards


// just-in-time: dynamically compiled i.e compilation during run time. uses 2 traditional approaches - ahead-of-time (AOT) compilation and Interpretation.
// first-class-functions: using functions as variables in the code.
// prototype-based-programming: an OOP style without explicitly decalring classes i.e objects are created even without class declaration.
// single-threaded: thread is an unit with the ability to execute the running of multiple programs at the same time.
// dynamic-typed: assigning variables data types at the run time based on their values
// declarative: functional programming
// standrads: uses ECMAScript language specification i.e ECMA-262 & ECMAScript Internationalization API Specification i.e ECMA-402


// examples

//      1 - first class functions

const first = () => {
    console.log("assigning anonymous function to variable!")
}

first()

function second() {
    console.log("passing function like a variable inside another function")
}

function third(fourth, message) {
    console.log(fourth);
    console.log("nested function!")
}

third(second)

// JS - dynamic client side scripting.
// prerequisites -
//      • understanding web
//      • HTML
//      • CSS

// ------------------ working of the Internet