function firstNonRepeating(str) {
    let charCount = new Array(26).fill(0);
    let q = [];


    for (let i = 0; i < str.length; i++) {
      let ch = str[i];

      q.push(ch);


      charCount[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      while (q.length > 0) {
        if (charCount[q[0].charCodeAt(0) -
        "a".charCodeAt(0)] > 1) {
          q.shift();
        } else {
          console.log(q[0] + " ");
          break;
        }
      }
      if (q.length == 0) {
       console.log(-1 + " ");
      }
    }
  }


  let str = "abab";
  firstNonRepeating(str);
   