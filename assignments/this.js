/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window object will be caled for a global scope
* 2. Implicit binding applies when a funcion is called with this.""
* 3. "this" app;ies to a new object called in a constructor function
* 4. explicit binding is when you use call or apply methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function magicTheGathering(best) {
    console.log(this);
    return best;
}
console.log("Blue, White");
// Principle 2

// code example for Implicit Binding
const mySupper= {
    supper: `pizza`,
    isTasty: function(good){
        console.log (`The ${this.supper} was good ${good}`)
    }
};

mySupper.isTasty("but unhealthy. ");
// Principle 3
// code example for New Binding

// VS code auto converted to 2015 ES5
class LambdaPeeps {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.query = function () {
            console.log(this.name + `,` + this.position);
            console.log(this);
        };
    }
}

const Charles = new LambdaPeeps(`Charles`, `TL`);
const Brian = new LambdaPeeps(`Brian`, `Student`);

Charles.query();
Brian.query();
// Principle 4

// code example for Explicit Binding
Charles.query.call(Brian);
Brian.query.apply(Charles);