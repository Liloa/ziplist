/*
  Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking
   elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return
   [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay
   that does the same thing using Underscore.
 */
function zipist(l1, l2) {
  const returnarr = [];
  for (let i = 0; i < l1.length; i++) {
    returnarr.push(l1[i]);
    returnarr.push(l2[i]);
  }
  return returnarr;
}
const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];

console.log(zipist(l1, l2));

function zipListTheSimpleWay(l11, l22) {
  const returnarr = [];

  _.each(l11, function (num) {
    returnarr.push(l22[_.find(num, function (x) { return x === num; })]);
    returnarr.push(num);
  });
  return returnarr;
}

console.log(zipListTheSimpleWay(l1, l2));

