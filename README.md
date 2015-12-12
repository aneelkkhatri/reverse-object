# reverse-object

A utility function to create an object with keys as original objects values, and values as the original object's respective keys.

## Install

    npm install reverse-object

## Usage

```javascript
var reverseObject = require('reverse-object');

reverseObject({"key1": "val1", "key2": "val2"});
//=> {"val1": "key1", "val2": "key2"}

// duplicate values
reverseObject({"key1": "val1", "key2": "val2", "key3": "val1"});
//=> {"val1": "key3", "val2": "key2"}

// "enumeration"
reverseObject(["key1","key2","key3"]);
//=> {"key1": "0", "key1": "1", "key2": "2"}

reverseObject("abc");
//=> {"a": "0", "b": "1", "c": "2"}
```
