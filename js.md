# 測試環境
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

// 設質
array[0] = 5566;
console.log(array[0]);
```

## Object
```javascript
var person = {firstName: "Sherlock", lastName: "Holmes"};

// 取值
console.log(person.firstName);
console.log(person.lastName);

// 設質
person.firstName = "織田";
person.lastName = "信長";
console.log(person.firstName);
console.log(person.lastName);


//另一種方式

// 設質
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

// greater than or equas
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

兩個 '==' 容易出錯，需要才使用, 一般儘量使用 '==='。'==' 它會自動轉 type,
例如 string "1" 跟 number 1 會被視為相同。
```javascript
console.log("1" == 1);
```

# Control Flow

## if

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

# null & undefined

undefined 宣告的變數未給值

null 意指『沒有值』。被視為一個物件(object)。 

```
var undefinedVar;
console.log(undefinedVar);
console.log(typeof(undefined));

var nullVar = null;
console.log(nullVar);
console.log(typeof(null));
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
