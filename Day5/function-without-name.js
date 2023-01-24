// let fn = function () {
//   console.log('test')
// }

// fn()

// let ff = function (x, y) {
//   console.log(x+y)
// }

// ff(2, 3)

//functions will execute immediately

(function () {
  console.log('yes')
})();
    
(function ff(x, y) {
  console.log(x + y)
})(1, 3);

(function fn() {
  console.log('xxx')
}());


//easier way to write x + y function
function fn(x = 0, y = 0) {
  console.log(x + y)
}

fn()
fn(3,8)