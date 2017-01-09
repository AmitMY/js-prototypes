# js-prototypes
Important although missing Javascript prototypes

[![Build Status](https://travis-ci.org/AmitMY/js-prototypes.svg?branch=master)](https://travis-ci.org/AmitMY/js-prototypes)
[![npm version](https://badge.fury.io/js/js-prototypes.svg)](https://badge.fury.io/js/js-prototypes)
[![license](https://img.shields.io/npm/l/js-prototypes.svg)](https://github.com/AmitMY/js-prototypes/blob/master/LICENSE)
[![node dependencies](https://david-dm.org/AmitMY/js-prototypes.svg)](https://david-dm.org/AmitMY/js-prototypes)
[![node dependencies](https://david-dm.org/AmitMY/js-prototypes/dev-status.svg)](https://david-dm.org/AmitMY/js-prototypes)
[![Known Vulnerabilities](https://snyk.io/test/github/AmitMY/js-prototypes/badge.svg)](https://snyk.io/test/github/AmitMY/js-prototypes)

# Contribution
Think there is an important, useful prototype that is missing? Let us know by opening an issue.

## Note:
The object prototypes can be used on all object extensions.

## How to use?
- Install: `npm install --save js-prototypes`
- Include the repo: 
    - `import JSPrototypes from "js-prototypes"`
    - OR
    - `import {ObjectPrototypes, ArrayPrototypes, StringPrototypes} from "js-prototypes"`
- Add the prototypes:
    - `JSPrototypes.all()` will add all prototypes
    - `ObjectPrototypes.all()` will add all object prototypes
    - `ArrayPrototypes.all()` will add all array prototypes
    - `StringPrototypes.all()` will add all string prototypes
- If you want to ignore collisions, just call the function with `false` as the only parameter
- If you want to load a specific prototype (Recommended): `type.method()` where type is the type of prototype, and method is the prototype's name.
    - Example: `ArrayPrototypes.shuffle()`

## Available prototypes

---

### Object
Method|Description
------|-----------
clone(obj)|Value level cloning of non-circular objects
forEach(obj, callback(value, key))|Loops through an object, and executes a callback
values(obj)|Converts an object to an array of values. Proposed for ES7
size(obj)|How many properties does an object have

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