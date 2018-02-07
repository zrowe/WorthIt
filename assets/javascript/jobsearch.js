// TODO:
// press enter to search, maybe clear out text
// add jquery, add javascript references
// verify images can be used
// get data attribution for all datasets for readme
// add IDs for job-api-dump

$(document).ready(function(){

// when button is clicked, send AJAX query to jobs API
$(document.body).on("click", "#submit", function() {

  var baseURL = "https://jobs.github.com/positions.json?";
  var descriptionInput = $("#search-text").val().trim();
  var location = "san+francisco";

  // replace spaces in word with + to create a complete URL
  var description = descriptionInput.split(" ").join("+");

  // construct query URL
  var queryURL = baseURL + "description=" + description + "&" + "location=" + location;

  console.log(queryURL);

// CORS requires a JSONP dataType

  $.ajax({
    url: queryURL,
    method: 'GET',
    dataType: 'jsonp'
  }).then(function(response) {
  console.log(response);

  //console.log("Title " + response["0"].title);
  //console.log("Company " + response["0"].company);
  //console.log("Description " + response["0"].description.substring(0, 100));
  //console.log("GitHub Jobs URL " + response["0"].url)

  for (var i = 0; i < 5; i++) {
    // console.log("Title " + response[i].title);
    //console.log("Company " + response[i].company);
    //$("#job" + i).text(response[i].title + " - " + response[i].company);
    var jobUrl = response[i].url;
    var jobTitle = response[i].title;
    var jobCompany = response[i].company;
    //var newLink = $("<a>");
    //var jobAttr = $("#job" + i).attr("href", jobUrl);
    var jobText = $("#job" + i).text(jobTitle + " - " + jobCompany);

  }

});

});

});
