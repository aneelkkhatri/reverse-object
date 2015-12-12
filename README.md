# reverse-object

A utility function to create an object with keys as original objects values, and values as the original object's respective keys.

## Install

  npm install reverse-object

## Usage

  var reverseObject = require('reverse-object');

  reverseObject({
    "key1": "val1", 
    "key2": "val2"
  });
  //=> {
    "val1": "key1", 
    "val2": "key2"
  }
