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
  // look up the salary for the job clicked and update the user interface
  $("body").on("click", "#job-menu a", function () {
    var chosenJob = $(this).text();
    var searchForJobs = getJobs(chosenJob);
    var avgSalary = salary[chosenJob];
    var avgSalaryFormatted = displayAsDollars(avgSalary)
    $("#job-api-heading").text(chosenJob + " jobs near San Francisco (via GitHub Jobs)");
    $("#avg-sal-dump").text(avgSalaryFormatted);
    $("#avg-sal-heading").text("Average " + chosenJob + " salary in San Francisco");
    $("#avg-sal-credit").text("Estimates provided by Glassdoor and based on salaries submitted anonymously to Glassdoor as of February 2018.");
    calcAffordRanges(avgSalary);
    return searchForJobs;
  });

  // calculate monthly salary (annual / 12 months), rounded to integer
  function calcMonthlySalary(salary) {
    var salaryMonthly = Math.floor(salary / 12);
    return salaryMonthly;
  }

  // calculate percents of monthly salary (30, 40, and 50 percents)
  // pass to getHousingOptions function to find housing at these levels
  function calcAffordRanges(salary) {
    var percents = {
      low : 0.30,
      medium: 0.40,
      high: 0.50
    }
    percents.low = Math.floor(percents.low * salary / 12);
    percents.medium = Math.floor(percents.medium * salary / 12);
    percents.high = Math.floor(percents.high * salary / 12);
    var housingOptions = showHousingOptions(percents);
    return housingOptions;
  }

  // display the salary values as a string in currency (US Dollar) format for the HTML page
  function displayAsDollars(salary) {
    var salaryFormatted = salary.toLocaleString("en-US", { style: "currency", currency: "USD" });
    return salaryFormatted;
  }

  // populate jobs drop-down list when the page loads
  displayJobs(salary);

});
