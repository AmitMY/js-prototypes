# js-helpers
Important although missing Javascript prototypes

## How to use?
- Install: `npm install --save js-helpers`
- Include the repo:
    - ES6: `import JSHelpers from "js-helpers"`
    - ES5: `var JSHelpers = require("js-helpers")`
- Execute the prototypes:
    - `JSHelpers.all()` will add all prototypes
    - `JSHelpers.array()` will add all array prototypes
    - `JSHelpers.object()` will add all object prototypes
    
## Available prototypes
Type|Name|Description
----|----|-----------
Array|shuffle()|Shuffles an array
Array|top()|Top of the array, without popping
Array|unique()|Returns an array of unique values, with no order changes
Object|size(obj)|How many properties does an object have
Object|clone(obj)|Value level cloning of non-circular objects
Object|values(obj|Converts an object to an array of values. Proposed for ES7
Object|forEach(obj, callback(value, key))|Loops through an object, and executes a callback