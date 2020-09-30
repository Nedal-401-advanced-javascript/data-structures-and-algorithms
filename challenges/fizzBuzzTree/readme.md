# Challenge Summary
Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.

## Challenge Description
Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.
Return a new tree.

## Approach & Efficiency
the function will take O(n) for the time becuse it will treverse through the tree and will move to every element and also will take O(n) for the space becuse will create new tree with same number of element for the original

## Solution
![](./assets/FuzzBuzz.jpg)