// create an object of job titles and salaries (source: Glassdoor)
var salary = {
  "backend engineer" : 84864,
  "data scientist" : 142729,
  "devops engineer" : 143779,
  "frontend engineer" : 115109,
  "product manager" : 129772,
  "QA engineer" : 85292,
  "senior software engineer" : 144045
  "software engineer" : 124555,
}

// function displayPositions(jobTitle) {
//   for (key in salary) {
//     console.log(key);
//   }
// }


// calculate monthly salary (annual / 12 months), rounded to integer
function calcMonthlySalary(salary) {
  var salaryMonthly = Math.floor(salary / 12);
  return salaryMonthly;
}

// calculate percents of monthly salary (25, 30, and 35)
function calcAffordRanges(salary) {
  var low = Math.floor(0.25 * salary / 12);
  var medium = Math.floor(0.30 * salary / 12);
  var high = Math.floor(0.50 * salary / 12);
  return [low, medium, high];
}

// display the salary values as a string in currency (US Dollar) format for the HTML page
function displayAsDollars(salary) {
  var salaryFormatted = salary.toLocaleString("en-US", { style: "currency", currency: "USD" });
  return salaryFormatted;
}

calcMonthlySalary(salary["software engineer"]);
calcAffordRanges(salary["software engineer"]);
displayAsDollars(salary["software engineer"]);
