# Perfect Number Challenge (PHP) #

We would like you to write a function in PHP to determine whether a given number is [perfect](https://en.wikipedia.org/wiki/Perfect_number), [abundant](https://en.wikipedia.org/wiki/Perfect_number), or [deficient](https://en.wikipedia.org/wiki/Deficient_number). This is based on the classification scheme for natural numbers by [Nicomachus](https://en.wikipedia.org/wiki/Nicomachus).

### Perfect, Abundant, and Deficient ###

Whether a number is one of these three categories is based on that number's [aliquot sum](https://en.wikipedia.org/wiki/Aliquot_sum). The aliquot sum is calculated by the sum of the divisors or factors of a number, not including the number itself.

For example, the proper divisors of 15 (that is, the positive divisors of 15 that are not equal to 15) are 1, 3 and 5, so the aliquot sum of 15 is 9 (1 + 3 + 5).

* **A perfect number** is where the aliquot sum = number
  * 6 is a perfect number because (1 + 2 + 3) = 6
* **An abundant number** is where the aliquot sum > number
  * 12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
* **A deficient number** is where the aliquot sum < number
  * 8 is a deficient number because (1 + 2 + 4) = 7

### Task ###

Write a function to determine whether a given number is perfect, abundant, or deficient.

```php
<?php
function getClassification($integer) {
    // returns 'perfect', 'abundant', or 'deficient'
}
```

### Tips ###

* Consider using TDD to build your function.
* Think about exceptions and error handling.
* Can you refactor your code?