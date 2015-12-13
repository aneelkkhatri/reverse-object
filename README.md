# reverse-object

A utility function to create an object with keys as original objects values, and values as the original object's respective keys.

## Install

```sh
$ npm install --save reverse-object
```

## Usage

```javascript
var reverseObject = require('reverse-object');

reverseObject({"key1": "val1", "key2": "val2"});
//=> {"val1": "key1", "val2": "key2"}

reverseObject({"key1": "val1", "key2": "val2", "key3": "val1"});
//=> {"val1": "key3", "val2": "key2"}

reverseObject(["key1", "key2", "key3"]);
//=> {"key1": "0", "key2": "1", "key3": "2"}

reverseObject("abc");
//=> {"a": "0", "b": "1", "c": "2"}
```

with noOverwrite true

```javascript
var reverseObject = require('reverse-object');

reverseObject({"key1": "val1", "key2": "val2"}, true);
//=> {"val1": ["key1"], "val2": ["key2"]}

reverseObject({"key1": "val1", "key2": "val2", "key3": "val1"}, true);
//=> {"val1": ["key1","key3"], "val2": ["key2"]}

reverseObject(["key1", "key2", "key1"], true);
//=> {"key1": ["0","2"], "key2": ["1"]}

reverseObject("aba", true);
//=> {"a": ["0","2"], "b": ["1"]}
```