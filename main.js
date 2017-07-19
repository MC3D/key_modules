// YOUR IMPORTS BELOW:

//  WARMUP
import warmUp from './utilities/warmup.js';

// DATEANDTIME
// Import using the * operator (as = allfunctions).
import * as allfunctions from './utilities/dateandtime.js'

// MATH
import {square, round} from './utilities/math.js';

// ARRAYS
import { mapper } from './utilities/arrays.js';
import { concatArrays } from './utilities/arrays.js';

// UTILITIES
import * as utilities from './utilities/utilities.js';

// YOUR FUNCTION CALLS BELOW:

//  WARMUP
warmUp(warmUp);

// DATEANDTIME
allfunctions.getCurrentTime();
allfunctions.getCurrentDate();

// MATH
square(64);
round(6.234);

// ARRAYS
mapper();
concatArrays();

// UTILITIES
utilities.iterator(utilities.myObject.array);
utilities.myObject.greeting('Matt');
