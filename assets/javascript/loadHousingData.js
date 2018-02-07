// function to get a list of cities nerby the city that it's called with
// this is likely the city where the user is searching for a job.
// it should possibly return distance from ground zero as well, but
// will ad when necessary.

function getNearbyCities(currentLocation) {

    citiesList = [
        "san francisco",
        "alameda",
        "walnut creek"
    ];

}


// test if data in housing data is new enough, if not new enough then call loadhousing data. 
// otherwise, do nothing.

function checkAgeOfHousingData() {

}

loadHousingData(citiesList);

// based upon a list of cities, populate fgirebase with the cost data of each type of housing for each city

function loadHousingData(citiesList) {


    var city = "San Francisco";
    var B1 = 3000;
    var B2 = 3500;
    var PH = 700;

    // Save the new price in Firebase
    dataRef.ref("/" + city).set({
        oneBedroom: B1,
        twoBedroom: B2,
        potHole: PH
    });

    var city = "San Mateo";
    var B1 = 1000;
    var B2 = 1200;
    var ST = 600;


    // Save the new price in Firebase
    dataRef.ref("/" + city).set({
        oneBedroom: B1,
        twoBedroom: B2,
        studio: ST
    });

    var city = "Alameda";
    var B1 = 700;
    var B2 = 900;
    var ST = 200;


    // Save the new price in Firebase
    dataRef.ref("/" + city).set({
        oneBedroom: B1,
        twoBedroom: B2,
        studio: ST
    });
}