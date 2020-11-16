const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
})();

// IIFE arrow func
(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate); ReferenceError: isPrivate is not defined
//console.log(notPrivate); // 46