function firstNonRepeating(str) {
    // count array of size 26(assuming
    // only lower case characters are present)
    var charCount = new Array(MAX_CHAR).fill(0);

    // Queue to store Characters
    var q = [];

    // traverse whole stream
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];

      // push each character in queue
      q.push(ch);

      // increment the frequency count
      charCount[ch.charCodeAt(0) - "a".charCodeAt(0)]++;

      // check for the non repeating character
      while (q.length > 0) {
        if (charCount[q[0].charCodeAt(0) -
        "a".charCodeAt(0)] > 1) {
          q.shift();
        } else {
          document.write(q[0] + " ");
          break;
        }
      }
      if (q.length == 0) {
        document.write(-1 + " ");
      }
    }
    document.write("<br>");
  }

  // Driver function
  var str = "aabc";
  firstNonRepeating(str);
   