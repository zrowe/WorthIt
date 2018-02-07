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

    // API requires a JSONP dataType to avoid CORS issues

    $.ajax({
      url: queryURL,
      method: 'GET',
      dataType: 'jsonp'
    }).then(function(response) {

      // loop through the response, collect the URL, title, and company for the first five jobs returned
      // create new list items on the page and make the text link to the source job application page
      for (var i = 0; i < 5; i++) {
        var jobUrl = response[i].url;
        var jobTitle = response[i].title;
        var jobCompany = response[i].company;
        var $li = $("<li>");
        $li.attr("id", "job" + i);
        $li.addClass("list-group-item");
        var $a = $("<a>");
        $a.text(jobTitle + " - " + jobCompany);
        $a.attr("href", jobUrl);
        $a.attr("target", "blank");
        $($li).append($a);
        $("#job-api-dump").append($li);
      }
    });
  });
});
