function cubeOdd(arr) {
if (arr.every( el => typeof el === "number")) {
  return arr.filter(i=>i%2!==0).map(el=>Math.pow(el, 3)).reduce((a,b) =>a +b);
  // return arr.map(e=>Math.pow(e ,3));
} else {
  return undefined;
}
  // insert code here >.<
  
  
  //return 0;
  }
console.log(cubeOdd([1, 2, 3, 4]));

// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);