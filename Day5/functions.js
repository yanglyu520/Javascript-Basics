function sayHello() {
  console.log('hello world by javascript')
}

sayHello()

function getSum(num1, num2) {
  let sum = num1 + num2
  return sum
}

console.log(getSum(1, 2))

//if num1 or num2 is undefined, then it will return undefined regardless except if it is added by a string(inexplicit type change)

function getAccurateSum(x, y) {
  x = x || 0
  x = y || 0

  console.log(x+y)
}

getAccurateSum('fdf', 232)

// get sum of an array
let arr = [20, 45, 55]

function getSumScore(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}

getSumScore(arr)

//return one result, can return an array if need to return multiple results.

function getMax(x, y) {
  if (x > y) {
    return x
  } else {
    return y
  }
}

console.log(getMax(5,6))