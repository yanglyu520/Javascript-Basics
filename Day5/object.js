let person = {
  name: 'yang',
  age: 18,
  sex: 'female',
  //method
  sayHi: function () {
    console.log('hey')
  }
}

//add or edit a field
person.hobby = 'football'
person.sex = 'male'

//delete a field
delete person.name

console.log(person)
console.log(person.age)
console.log(person['sex'])
person.sayHi()

//go through all elements in an object
for (let k in person) {
  console.log(k)

  console.log(person[k])
}