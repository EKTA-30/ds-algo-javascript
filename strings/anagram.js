function areAnagrams(str1, str2) {
  if (str1.length != str2.length) return false;
  let allCharacters = new Array(256);
  allCharacters.fill(0);

  for (let i = 0; i < 256; i++) {
    if(str1[i])
    allCharacters[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    if(str2[i])
    allCharacters[str2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  for (let value of allCharacters) {
    if (value != 0) return false;
  }
  return true;
}

let str1 = "listenoing";
let str2 = "silent";

console.log(areAnagrams(str1, str2));
