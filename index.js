'use strict';

/**
 * A utility function to create an object with keys as original objects values, 
 * and values as the original object's respective keys.
 *
 * @param {Object}
 * @return {Object}
 */

module.exports = function reverseObject (object) {
  var newObject = {};
  for (var key in object) {
    value = object[key];
    newObject[value] = key;
  }

  return newObject;
};
