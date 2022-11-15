const groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};

let ans = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(ans)

