# js-prototypes
Important although missing Javascript prototypes

## How to use?
- Install: `npm install --save js-prototypes`
- Include the repo:
    - ES6: `import JSPrototypes from "js-prototypes"`
    - ES5: `var JSPrototypes = require("js-prototypes")`
- Execute the prototypes:
    - `JSPrototypes.all()` will add all prototypes
    - `JSPrototypes.array()` will add all array prototypes
    - `JSPrototypes.object()` will add all object prototypes
    - `JSPrototypes.string()` will add all string prototypes
    
## Available prototypes
Type|Name|Description
----|----|-----------
String|capitalise()|Capitalises a string
Array|shuffle()|Shuffles an array
Array|top()|Top of the array, without popping
Array|unique()|Returns an array of unique values, with no order changes
Object|size(obj)|How many properties does an object have
Object|clone(obj)|Value level cloning of non-circular objects
Object|values(obj|Converts an object to an array of values. Proposed for ES7
Object|forEach(obj, callback(value, key))|Loops through an object, and executes a callback