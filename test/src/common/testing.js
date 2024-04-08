/*
 * a simple unit test framework
 *
 * the test results are written to the console
 */

class AssertException {
  /*  message
  
    constructor(message) {
      this.message = message;
    }
  
    toString() {
      return this.message;
    }*/
}

class AssertNotExpectedValueException extends AssertException {
  observed
  expected

  constructor(observed, expected) {
    super();

    this.observed = observed;
    this.expected = expected;
  }

  toString() {
    return "observed: " + this.observed + ", expected: " + this.expected;
  }
}

const assert = {

  isTrue: function(value) {
    this.equals(value, true);
  },

  isFalse: function(value) {
    this.equals(value, false);
  },

  equals: function(observed, expected) {
    if (observed != expected)
      throw new AssertNotExpectedValueException(observed, expected);
  },

  equalsExactly: function(observed, expected) {
    if (observed !== expected)
      throw new AssertNotExpectedValueException(observed, expected);
  },

  /*
   * ideas for other assert functions
   */
  arrayEquals() {
    //->
  },

  arrayContains() {
    //->
  },

  objectContainsKey() {
    //->
  },

  objectContainsValue() {
    //->
  }
};

// test statistics
var unitTestFailed;
var unitTestSucceeded;
var unitTestError;

function startTest() {
  // clear stats
  unitTestSucceeded = 0;
  unitTestFailed = 0;
  unitTestError = 0;

  console.log("Testing...");
}

function unitTestResult() {
  return "Succeeded: " + unitTestSucceeded + "\n" +
         "Failed:    " + unitTestFailed + "\n" +
         "Error:     " + unitTestError + "\n" +
         "Total:     " + (unitTestSucceeded + unitTestFailed + unitTestError);
}

function endTest() {
  // show stats
  console.log(unitTestResult());
}

function unitTest(title, testFunction) {
  try {
    testFunction.call();
    unitTestSucceeded++;
  }
  catch (error) {
    if (typeof error === 'object' && error instanceof AssertException) {
      console.log("Failed: " + title + ", " + error.toString());
      unitTestFailed++;
    } else {
      // an error was thrown outside the test system
      console.log(error);
      unitTestError++;
    }
  }
}

export {
  startTest,
  endTest,

  unitTest,

  assert
};