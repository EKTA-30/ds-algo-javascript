function firstNegativeInteger(arr, n, k) {
  var Di = [];
  var i;
  for (i = 0; i < k; i++)
    if (arr[i] < 0)
      Di.push(i);
  for (; i < n; i++) {
    if (Di.length !== 0)
      console.log(arr[Di[0]] + " ");
    else
      console.log("0" + " ");
    while ((Di.length !== 0) && Di[0] < (i - k + 1))
      Di.shift();
    if (arr[i] < 0)
      Di.push(i);
  }
  if (Di.length !== 0)
    console.log(arr[Di[0]] + " ");
  else
    console.log("0" + " ");
}



var arr = [12, -11, -17, 18, -15, 20, 6, 38];
var n = arr.length;
var k = 3;
firstNegativeInteger(arr, n, k);


        