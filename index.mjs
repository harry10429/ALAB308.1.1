// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const Dividablebyfive= (n1 % 5==0)&& (n2 % 5==0)&&(n3 % 5==0)&&(n4 % 5==0);

console.log("All Four numbers are dividable by 5 is: "+Dividablebyfive);

console.log("n1 that larger than n4 is:"+ (n1>n4));

console.log("the result is: "+ (((n2-n1)*n3)%n4));

const lessorequal25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;

console.log("Four numbers are valid: "+(isSum50 && isTwoOdd && lessorequal25 && isUnique));


let tripDist = 1500;

let budget = 175;

let BudgetgallonUsed75 = tripDist/23 * 3;
let BudgetgallonUsed60 = tripDist/28 *3;
let BudgetgallonUsed55 = tripDist/30 *3;


console.log("Buget for 75 miles per hour is: "+BudgetgallonUsed75);
console.log("Buget for 60 miles per hour is: "+BudgetgallonUsed60);
console.log("Buget for 55 miles per hour is: " + BudgetgallonUsed55);

console.log("The expense for 75 miles per house can be covered: " + (BudgetgallonUsed75<budget) );
console.log("The expense for 60 miles per house can be covered: " + (BudgetgallonUsed60<budget) );
console.log("The expense for 55 miles per house can be covered: " + (BudgetgallonUsed55<budget) );

console.log("The hour traveling for 75 miles per hour is: " + (tripDist/75) );
console.log("The hour traveling for 60 miles per hour is: " + (tripDist/60) );
console.log("The hour traveling for 55 miles per hour is: " + (tripDist/55) );

