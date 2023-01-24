console.log(Math.PI)
//random returns number between 0-1, can get 0 but not 1
console.log(Math.random())

console.log(Math.ceil(1.1)) //return 2
console.log(Math.ceil(1.5)) //return 2

console.log(Math.floor(2.1)) //return 2
console.log(Math.round(-1.1)) //return -1

//get a random number between m and n

function randomNum(m,n) {
  return Math.floor(Math.random() * (m - n + 1))+n
}

console.log(randomNum(15,2))