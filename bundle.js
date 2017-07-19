(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _warmup = require('./utilities/warmup.js');

var _warmup2 = _interopRequireDefault(_warmup);

var _dateandtime = require('./utilities/dateandtime.js');

var allfunctions = _interopRequireWildcard(_dateandtime);

var _math = require('./utilities/math.js');

var _arrays = require('./utilities/arrays.js');

var _utilities = require('./utilities/utilities.js');

var utilities = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// YOUR FUNCTION CALLS BELOW:

//  WARMUP


// MATH
// YOUR IMPORTS BELOW:

//  WARMUP
(0, _warmup2.default)(_warmup2.default);

// DATEANDTIME


// UTILITIES


// ARRAYS


// DATEANDTIME
// Import using the * operator (as = allfunctions).
allfunctions.getCurrentTime();
allfunctions.getCurrentDate();

// MATH
(0, _math.square)(64);
(0, _math.round)(6.234);

// ARRAYS
(0, _arrays.mapper)();
(0, _arrays.concatArrays)();

// UTILITIES
utilities.iterator(utilities.myObject.array);
utilities.myObject.greeting('Matt');

},{"./utilities/arrays.js":2,"./utilities/dateandtime.js":3,"./utilities/math.js":4,"./utilities/utilities.js":5,"./utilities/warmup.js":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = mapper;
exports.concatArrays = concatArrays;
// ARRAYS
// Keep variables in the arrays file, no need to export.
// Export all functions idividually.
// Import each function individually.

var languages = ["JavaScript", "Ruby", "Phython", "CSS"];
var moreLanguages = {
  html: "HTML",
  php: "php"
};

function mapper() {
  return Object.keys(moreLanguages).map(function (key) {
    var items = moreLanguages[key];
    console.log("mapper: ", items);
    return items;
  });
}

function concatArrays() {
  var newArray = languages.concat(mapper());
  console.log(newArray);
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// DATEANDTIME
// Export ALL date and time functions, inline.
// Import  using the * operator (as = allfunctions).

function getCurrentTime() {
  var time = new Date().toLocaleTimeString();
  return console.log(time);
};

function getCurrentDate() {
  var date = new Date().toLocaleDateString();
  return console.log(date);
};

exports.getCurrentTime = getCurrentTime;
exports.getCurrentDate = getCurrentDate;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.power = power;
exports.square = square;
exports.round = round;
// MATH
// Export all functions individually
// Import only: square and round, using { }

function power(x, y) {
  return console.log(Math.pow(x, y));
};

function square(x) {
  return console.log(Math.sqrt(x));
};

function round(x) {
  return console.log(Math.round(x));
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// UTILITIES
// Export both the function and myObject, inline.
// Import both using the * operator (as = utilities).

function iterator(data) {
  data.forEach(function (item) {
    console.log("Item:", item);
  });
};

var myObject = {
  array: ["motheboard", "memory", "processor"],
  greeting: function greeting(name) {
    return console.log("Hello, my name is " + name + ".");
  }
};

exports.iterator = iterator;
exports.myObject = myObject;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warmUp;
//  WARMUP
// Export import() as a 'default'
function warmUp(data) {
  return console.log("Imported this function: ", data);
};

},{}]},{},[1]);
