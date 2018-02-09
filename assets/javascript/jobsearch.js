// when button is clicked, send AJAX query to jobs API
function getJobs(chosenJob) {

  var baseURL = "https://jobs.github.com/positions.json?";
  var location = "san+francisco";

  // replace spaces in word with + to create a complete URL
  var description = chosenJob.split(" ").join("+");

  // construct query URL
  var queryURL = baseURL + "description=" + description + "&" + "location=" + location;

  $("#job-api-dump").empty();

  // API requires a JSONP dataType to avoid CORS issues
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp"
  }).then(function(response) {

    // loop through the response, collect the URL, title, and company for the first five jobs returned
    // create new list items on the page and make the text link to the source job application page
    for (var i = 0; i < 5; i++) {
      var jobUrl = response[i].url;
      var jobTitle = response[i].title;
      var jobCompany = response[i].company;
      var jobLocation = response[i].location;
      var $li = $("<li>");
      $li.attr("id", "job" + i);
      $li.addClass("list-group-item");
      var $a = $("<a>");
      $a.text(jobCompany + " - " + jobTitle + " - " + jobLocation);
      $a.attr("href", jobUrl);
      $a.attr("target", "blank");
      $($li).append($a);
      $("#job-api-dump").append($li);
    }
  });
}
