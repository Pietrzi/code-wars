// function invertHash(o) {
//   return Object.keys(o).reduce((r,k)=>(r[o[k]]=k,r),{})
// }

function invertHash(hash) {
  var arr=[];
  for (var key in hash)
  {
    var a=[]
    a.push(hash[key],key);
    arr.push(a);
  }
  var c={}
  for (var i=0; i<arr.length; ++i)
    c[arr[i][0]]=arr[i][1];
  return c;
}

console.log(invertHash({a:1, b:2, c:3}))