// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.
//
// Write a function that, given an amount of money and an array of coin denominations, computes
// the number of ways to make the amount of money with coins of the available denominations.
//
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would
// output 4—the number of ways to make 4¢ with those denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denominations) {
  let numberOfWaysNCent = new Array(amount + 1).fill(0);
  numberOfWaysNCent[0] = 1;

  denominations.forEach( coin => {
    for (let currentCoin = coin; currentCoin <= amount; currentCoin++) {
      let remainder = currentCoin - coin;
      numberOfWaysNCent[currentCoin] += numberOfWaysNCent[remainder];
    }
  });


  return numberOfWaysNCent[amount];
}

let a1 = 4,
    d1 = [1, 2, 3],
    test1 = changePossibilities(a1, d1);

console.log(test1);
