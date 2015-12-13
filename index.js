/**
 * reverse-object v1.0.0
 *
 * A utility function to create an object with keys as original objects values, 
 * and values as the original object's respective keys.
 *
 * @param {Object}
 * @param {boolean}
 * @return {Object}
 */

// Based off https://github.com/ForbesLindesay/umd/blob/master/template.js
;(function (f) {
  // CommonJS
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();

  // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define([], f);

  // <script>
  } else {
    var g
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // seee https://github.com/facebook/react/issues/3037
      g = this;
    }
    g.reverseObject = f();
  }

})(function () {
  
  function reverseObjectWithOverwrite (object) {
    var newObject = {};
    for (var key in object) {
      value = object[key];
      newObject[value] = key;
    }
    return newObject; 
  };

  function reverseObjectWithoutOverwrite (object) {
    var newObject = {};
    for (var key in object) {
      value = object[key];
      if (newObject[value] === undefined) {
        newObject[value] = [];
      }
      newObject[value].push(key);
    }
    return newObject;
  }

  return function reverseObject (object, noOverwrite) {
    var newObject = null;
    if (object && (typeof object === "object" || typeof object == "string")) {
      if (noOverwrite) {
        newObject = reverseObjectWithoutOverwrite(object);
      }
      else {
        newObject = reverseObjectWithOverwrite(object);
      } 
    }
    return newObject;
  };

});
