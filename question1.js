// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order
// they occur in the string t. You can assume t will not have repetitive characters.
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s, t) {
  let collection = {},
      result = '';

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    collection[letter] ? collection[letter] += 1 : collection[letter] = 1;
  }

  for (let j = 0; j < t.length; j++) {
    let letter = t[j];
    if (collection[letter]) {
      let count = collection[letter];
      for (let i = 0; i < count; i++) {
        result += letter;
      }
    }
  }

  return result;
}

let s = "weather",
    t = "therapyw";

let test1 = sortByStrings(s, t);
console.log(test1);

let s2 = "good",
    t2 = "odg";

let test2 = sortByStrings(s2, t2);
console.log(test2);
