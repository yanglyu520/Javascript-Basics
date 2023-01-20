for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//find sum of even numbers of 1-->100
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i
    }
        
}

console.log(sum)

// print 5 stars

for (let i = 0; i <= 4; i++) {
    console.log('>*<')
}

//print array
let arr = [1, 3, 45]
console.log(arr)

for (let i = 0; i <=arr.length; i++) {
    console.log(arr[i])
}