let person = {
  name: 'yang',
  age: 18,
  sex: 'female',
  //method
  sayHi: function () {
    console.log('hey')
  }
}

console.log(person)
console.log(person.age)
console.log(person['sex'])
person.sayHi()