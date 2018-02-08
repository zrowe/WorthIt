// create an object of job titles and salaries (source: Glassdoor)
var salary = {
  "software engineer" : 124555,
  "QA engineer" : 85292,
  "product manager" : 129772,
  "devops engineer" : 143779,
  "backend engineer" : 84864,
  "frontend engineer" : 115109,
  "data scientist" : 142729,
  "senior software engineer" : 144045
}

var salaryMonthly;
var salary25;
var salary30;
var salary35;

// calculate monthly salary (annual / 12 months), rounded to integer
function calcMonthlySalary(salary) {
  salaryMonthly = Math.round(salary / 12);
  console.log(salaryMonthly);
  return salaryMonthly;
}

// calculate percents of monthly salary (25, 30, and 35)
function calcSalaryPercents(salary) {
  var salary25 = Math.round(0.25 * salary / 12);
  var salary30 = Math.round(0.30 * salary / 12);
  var salary35 = Math.round(0.35 * salary / 12);
  console.log("25 percent" + salary25);
  console.log("30 percent" + salary30);
  console.log("35 percent" + salary35);
  return [salary25, salary30, salary35];
}

// display the salary values as a string in currency (US Dollar) format for the HTML page
function displayAsDollars(salary) {
  var salaryFormatted = salary.toLocaleString("en-US", { style: "currency", currency: "USD" });
  console.log(salaryFormatted);
  return salaryFormatted;
}

calcMonthlySalary(salary["software engineer"]);
calcSalaryPercents(salary["software engineer"]);
displayAsDollars(salary["software engineer"]);
