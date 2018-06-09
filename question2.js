// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is
// repeated exactly k times. Note: k is guaranteed to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
  let result = "",
      stringToRepeat = "",
      count = 1;

  for (let i = 0; i < s.length; i++) {
    let letter = parseInt(s[i]);

    if (!Number.isNaN(letter)) {
      count = Number(letter);
    } else if (s[i] === ']') {
      for (let j = 0; j < count; j++) {
        result += stringToRepeat;
      }

      stringToRepeat = "";
    } else {
      if (s[i] === '[') continue;
      stringToRepeat += s[i];
    }
  }

  return result;
}

let s = "4[ab]",
    test1 = decodeString(s);
console.log(test1);
console.log("4[ab]");

let s2 = "2[b3[a]]",
    test2 = decodeString(s2);

console.log(test2);
console.log("2[b3[a]]");
