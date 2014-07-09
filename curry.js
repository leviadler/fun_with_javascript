Function.prototype.curry = function(numArgs) {
  var args = [];
  var funct = this;

  var _curry = function(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return funct.apply(funct, args);
    } else {
      return _curry;
    }
  }

  return _curry;
}

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
//
// sumThree(4, 20, 3); // == 27
//
// // you'll write `Function#curry`!
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// // var result = f3(3); // = 27
//
// // or more briefly:
// var result = sumThree.curry(3)(4)(20)(3); // == 27
// console.log(result);



