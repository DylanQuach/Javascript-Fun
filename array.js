//Creating an Array
//Old Way of Making Arrays
var myArr = new Array()
//Prefered way of making arrays
var myArr2 = []

//Making an array of a certain size
var mybigArr = new Array(100)

var mybigArr2 = []

var array = []
array.length = 9

//Position of items in the array
var superArr = ['rock', 'paper', 'scissors']
//Index (position of item) is zero based, starts on zero
superArr[1]
//Adding things to your array
var supArr = []
//Adds items to the end of an array
supArr.push('Stan Lee', 'Spiderman', 1)
//Addint something to the beginning of an array
supArr.unshift(1, 2.3, true)

//remove
//mutable are items that can be changed, imutable are items that can't be changed
var sArr = [1, 2, 3]

//Removes last element of any array
sArr.pop

//Removes the first element of an array
sArr.shift

delete sArr [2]

//imutable
sArr.slice(2)


//iterate, going through an array, loops
var nums = [1, 2, 3, 4, 5]

//forEach
nums.forEach(function(num, index) {
  console.log("index of:" + index +"values: " + num)
})

//map
nums.map(function(num, index) {
  console.log(num++)
})

//filter
nums.filter(function(num, index) {
  console.log(num % 2 == 0)
})

['s', 23, 23.2, true, false.filter(boolean)]

// for
for (var index = 0; index < nums.length; index++) {
  console.log(num[index])
}

// type checking; checks for what datatypse something is
typeof []
typeof 0
typeof true

//misc functions
var lastArr = ['rock', 'green', 'blue']

//return a string of what the array looks like
lastArr.toString

// Bbring two values together
lastArr.join()

//Reverses the Array
lastArr.reverse

//put the items in order
lastArr.sort()

//search the array
lastArr.find()

//tell the index of the value
lastArr.indexOf()

// boolean on if the array includes a value
lastArr.includes()

//combine arrays
lastArr.concat()


