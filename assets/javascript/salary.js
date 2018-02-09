$(document).ready(function(){

  // create an object of job titles and salaries (source: Glassdoor)
  var salary = {
    "Backend Engineer" : 84864,
    "Data Scientist" : 142729,
    "Devops Engineer" : 143779,
    "Frontend Engineer" : 115109,
    "Product Manager" : 129772,
    "QA Engineer" : 85292,
    "Senior Software Engineer" : 144045,
    "Software Engineer" : 124555
  }

  // loop through jobs in the job-salary object
  // add them to the HTML drop-down list
  function displayJobs() {
    for (key in salary) {
      var $a = $("<a>");
      $a.addClass("dropdown-item");
      $a.attr("href", "#job-api-dump");
      $a.attr("id", key);
      $a.text(key);
      $("#job-menu").append($a);
    }
  }

  // determine which job in the drop-down list was clicked and get its text
  // the text needs to be sent to the job search API in another function
  // look up the salary for the job clicked
  $("body").on("click", "#job-menu a", function () {
    var chosenJob = $(this).text();
    var searchForJobs = getJobs(chosenJob);
    var avgSalary = salary[chosenJob];
    var avgSalaryFormatted = displayAsDollars(avgSalary)
    $("#avg-sal-dump").text(avgSalaryFormatted);
    return searchForJobs;
  });

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

  // populate jobs drop-down list when the page loads
  displayJobs(salary);

});
