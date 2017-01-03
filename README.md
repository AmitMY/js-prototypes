# js-prototypes
Important although missing Javascript prototypes

# Contribution
Think there is an important, useful prototype that is missing? Let us know by opening an issue.

## Note:
The object prototypes can be used on all object extensions.

## How to use?
- Install: `npm install --save js-prototypes`
- Include the repo: `import JSPrototypes from "js-prototypes"`
- Execute the prototypes:
    - `JSPrototypes.all()` will add all prototypes
    - `JSPrototypes.object()` will add all object prototypes
    - `JSPrototypes.array()` will add all array prototypes
    - `JSPrototypes.string()` will add all string prototypes
- If you want to ignore collisions, just call the function with `false` as the only parameter

## Available prototypes

---

### Object
Method|Description
------|-----------
clone(obj)|Value level cloning of non-circular objects
forEach(obj, callback(value, key))|Loops through an object, and executes a callback
values(obj|Converts an object to an array of values. Proposed for ES7
size(obj)|How many properties does an object have
getObjectName(obj)|Returns the name of the object type

---

### Array
Method|Description
------|-----------
shuffle()|Shuffles an array
top()|Top of the array, without popping
unique()|Returns an array of unique values, with no order changes
equals(array)|Returns true if both arrays are equal, false if they are not

---

### String
Method|Description
------|-----------
capitalise()|Capitalises a string