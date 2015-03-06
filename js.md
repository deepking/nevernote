# 測試環境
## node
執行 node, 以下的 sample 都用 node 執行測試。
```
$ node
> console.log("hello world");
hello world
undefined
> var x = 1;
undefined
> x
1
> 1 + 1
2
```

或者在一個檔案裡面編輯 js code, mylib.js
```javascript
console.log("hello world");
var x = 1;
console.log(x);
```
執行
```
$ node mylib.js
```

## shebang
又或者用 shebang 的方式, myexec.js
```
#!/usr/bin/env node

console.log("Hello World");
```
需要加上執行權限
```
$ chmod +x myexec.js
```
執行
```
$ ./myexec.js
```


# Data type

```javascript
// 這是註解不會被執行

var numType = 123;

var stringType = "hello";

var booleanType = true;
var booleanType2 = false;

var arrayType = [1, 2, 3];

var objectType = {firstName: "Sherlock", lastName: "Holmes"};

var dateType = new Date();

var functionType = function() { return "I'm Function" };

console.log(numType);
console.log(stringType);
console.log(booleanType);
console.log(booleanType2);
console.log(arrayType);
console.log(objectType);
console.log(dateType);
console.log(functionType());

// typeof 回傳 type
console.log("numType", typeof(numType));
console.log("stringType", typeof(stringType));
console.log("booleanType", typeof(booleanType));
console.log("arrayType", typeof(arrayType));
console.log("objectType", typeof(objectType));
console.log("dateType", typeof(dateType));
console.log("functionType", typeof(functionType));
```

## Array 
```javascript
var array = [1, 2, 3, 4, 5];
// array 長度
console.log(array.length);

// 取值, 0表示第一個 element, 以此類推
console.log(array[0]);
console.log(array[1]);

// 設值
array[0] = 5566;
console.log(array[0]);
```

## Object
```javascript
var person = {firstName: "Sherlock", lastName: "Holmes"};

// 取值
console.log(person.firstName);
console.log(person.lastName);

// 設值
person.firstName = "織田";
person.lastName = "信長";
console.log(person.firstName);
console.log(person.lastName);


//另一種方式

// 設值
person["firstName"] = "Sherlock";
person["lastName"] = "Holmes";

// 取值
console.log(person["firstName"]);
console.log(person["lastName"]);
```

# Arithmetic
在 node 測試以下運算結果

```
> 2 + 3
5
> 2 - 3
-1
> 2 * 3
6
> 2 / 3
0.6666666666666666
> 2 % 3
2
> var x = 0;
undefined
> x++
0
> x
1
> x--
1
> x
0
> 
```

| Operator | Description     |
| -------- | --------------- |
| + 	   | Addition        |
| - 	   | Subtraction     |
| * 	   | Multiplication  |
| / 	   | Division        |
| % 	   | Modulus         |
| ++ 	   | Increment       |
| -- 	   | Decrement       |


# Comparison

```javascript

// equal
console.log(5 === 8);

// not equal
console.log(5 !== 8);

// greater than
console.log(5 > 8);

// less than
console.log(5 < 8);

// greater than or equal
console.log(5 >= 5);

// less than or equal
console.log(5 <= 5);

// and
console.log((5 === 8) && (5 === 5));

// or
console.log((5 === 8) || (5 === 5));

// not
console.log(!(5 === 8)); 
```

'==' 容易出錯，需要才使用, 一般儘量使用 '==='。'==' 它會自動轉 type,
例如 string "1" 跟 number 1 會被視為相同。
```javascript
console.log("1" == 1);
```

# Control Flow

## if

就算只有一行code也加上大括號 { }, 減少錯誤。

```javascript
if (1 === 1) {
    console.log("1 is 1");
} else {
    console.log("1 is not 1");
}


if (1 === 0) {
    console.log("1 is 0");
} else if (1 !== 0) {
    console.log("1 is not 0");
} else {
    console.log("None of the above");
}

```

## for

### syntax
```
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
```
**Statement 1** is executed before the loop (the code block) starts.

**Statement 2** defines the condition for running the loop (the code block).

**Statement 3** is executed each time after the loop (the code block) has been executed.


### iterate array
```javascript
var array = [1, 2, 3, 4, 5];
var i;
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

### iterate object 
```javascript
var person = {firstName: "Sherlock", lastName: "Holmes"};
var key;
var value;
for (key in person) {
   value = person[key];
   console.log(key, value);
}
```

### for..in array

for..in 也可以用在 array, 但有個情況需要注意, 小心誤用
```javascript
var a = [];
a[5] = 5; // Perfectly legal JavaScript that resizes the array.
var i;
var value;

for (i = 0; i < a.length; i++) {
    value = a[i];
    console.log(i, value);
}

for (i in a) {
    value = a[i];
    console.log(i, value);
}
```
for..in array 只會 show index 5!!

### break
中斷迴圈
```javascript
var array = [1, 2, 3, 4, 5];
var i;
for (i = 0; i < array.length; i++) {
    var x = array[i];
    if (x === 3)
        break;
}
console.log(i);
```

## continue
```
var i = 0;
var n = 0;
while (i < 5) {
   i++;
   if (i === 3) {
      continue;
   }
   n += i;
}
console.log(i, n);
```

## while loop
```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
console.log(n, x);
```

## switch

注意每個 case 都要接著 break, 否則會繼續執行下一個 case。

default case 是當沒有 match 任何 case 時，就執行 default case。
建議都要處理 default, 減少 bug。

### sample

```javascript
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        // do nothing
        break;
} 

console.log(day);
```

## conditional operator

if else 的簡寫版本

```javascript
var flag = true;
var foo = flag ? 1 : 0;
console.log(foo);

var bar = (1 === 0) ? 1 : 0;
console.log(bar);
```
等同於
```javascript
var flag = true;
var foo; 
if (flag) { 
    fooo = 1; 
} else { 
    foo = 0; 
}
```

# null & undefined

undefined 宣告的變數未給值

null 意指『沒有值』。被視為一個物件(object)。 

```javascript
var undefinedVar;
console.log(undefinedVar);
console.log(typeof(undefined));

var nullVar = null;
console.log(nullVar);
console.log(typeof(null));
```

# false condition

0, '', undefined, null 被視為 fasle

```javascript
if (0) {
    console.log("0 is true");
} else {
    console.log("0 is false");
}

if ('') {
    console.log("'' is true");
} else {
    console.log("'' is false");
}

if (undefined) {
    console.log("undefined is true");
} else {
    console.log("undefined is false");
}

if (null) {
    console.log("null is true");
} else {
    console.log("null is false");
}
```

常用來判斷變數是否有值
```javascript
var x;
if (x) {
    console.log("x is ", x);
} else {
    console.log("ERROR: x is invalid");
}
x = 1;
if (x) {
    console.log("x is ", x);
} else {
    console.log("ERROR: x is invalid");
}

var y = "";
if (!y) {
    y = "Hello world";
}
console.log(y);
```

常用來給預設值,
```javascript
function foo(x) {
    var y = x || "default string"; 
    console.log(y);
}

foo("my string");
foo("");
```

# Function

```javascript
// void 沒有 return 值
function voidFunction() {
    console.log("hello world");
}

voidFunction();

// 有名稱
function namedFunction(x, y) {
    return x + y;
}

var x = namedFunction(1, 2);
console.log(x);

// 沒有名稱
var anonymousFunction = function(x, y) {
    return x + y;
};

var x = anonymousFunction(3, 4);
console.log(x);


// 動態參數, 由 arguments 取得參數, 為一個 array
function variableParameter() {
   var x = arguments[0];
   var y = arguments[1];
   return x + y;
}

var x = variableParameter(5, 6);
console.log(x);

// 預設參數
function defaultParameter(x, y) {
    x = typeof x !== 'undefined' ? x : 0;
    y = typeof y !== 'undefined' ? y : 8;
    return x + y;
}

var x = defaultParameter(7);
console.log(x);
```

# Exception 

處理異常情況。

可以 throw string or [Error](http://devdocs.io/javascript/global_objects/error)

```javascript
function openFile(fileName) {
    if (!fileName) {
        throw "Invalid File Name";
    } else {
        return "Open File";
    }
}

try {
    var file = openFile(null);
} catch(e) {
    console.log(e);
}
```

參考更多 [try..catch 範例](http://devdocs.io/javascript/statements/try...catch)

# finally
即使有 Exception 也會被執行。常用在 release resource，避免造成 leak.

```javascript
function openMyFile() {
    console.log("open file");
}
function closeMyFile() {
    console.log("close file");
}
function writeMyFile(data) {
    throw "Write Error";
    console.log("write", data);
}

var theData = "Hello";
openMyFile();
try {
   // tie up a resource
   writeMyFile(theData);
} finally {
   closeMyFile(); // always close the resource
}
```


# Callback

# Require

# Advance
這部分有空或用到再看

## this

重要觀念，很容易出錯。

參考 http://devdocs.io/javascript/operators/this


## Module

參考 http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

## 下一步

- [JS Standard Lib](http://devdocs.io/javascript/)
    - Array
    - String
    - Math
    - Number
    - Date
    - JSON
- [Node Standard Lib](http://devdocs.io/node/)
- [JS The Right Way](http://jstherightway.org/)

其他會被 Compile 成 JS 的語言, 比較常見
- [CoffeeScript](http://coffeescript.org/)
- [TypeScript](http://www.typescriptlang.org/)

