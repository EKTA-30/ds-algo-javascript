function removeKDigitsToMakeMinimum(S, k) {
  let resultantStack = [];
  // Store the final string in stack
  for (let ch of S){
    while (resultantStack.length > 0 &&k > 0 && resultantStack[resultantStack.length - 1].charCodeAt(0) > ch.charCodeAt(0)){
         resultantStack.pop();
         k -= 1;
    }

    if (resultantStack.length > 0 || ch !== "0") 
        resultantStack.push(ch);
  }

  // Remove largest value from top of stack
  while (resultantStack.length > 0 && k--) resultantStack.pop();
  if (resultantStack.length == 0) return "0";
  //Convert the number in stack to string
  let res_string = "";
  while (resultantStack.length > 0) {
    res_string = resultantStack[resultantStack.length - 1] + res_string;
    resultantStack.pop();
  }
  return res_string;
}

let res = removeKDigitsToMakeMinimum("100", 1);
console.log(res);
