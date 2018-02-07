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

// Example  data endpoints:
//
// ZILLOW/C9_MRP2B - Zillow Home Value Index (City): Median Rental Price - Two Bedrooms - San Francisco, CA
// ZILLOW/C9_MRP1B - Zillow Home Value Index (City): Median Rental Price - One Bedroom - San Francisco, CA
// ZILLOW/C9_MRPAH - Zillow Home Value Index (City): Median Rental Price - All Homes - San Francisco, CA
// ZILLOW/C9_MRP3B - Zillow Home Value Index (City): Median Rental Price - Three Bedrooms - San Francisco, CA
// ZILLOW/C9_MRPDT - Zillow Home Value Index (City): Median Rental Price - Duplex/Triplex - San Francisco, CA
// ZILLOW/C9_MRPST - Zillow Home Value Index (City): Median Rental Price - Studio - San Francisco, CA
// ZILLOW/C9_MRPMF - Zillow Home Value Index (City): Median Rental Price - Multi-Family Residence - San Francisco, CA
// ZILLOW/C9_MRPSF - Zillow Home Value Index (City): Median Rental Price - Single-Family Residence - San Francisco, CA
// ZILLOW/C9_MRP4B - Zillow Home Value Index (City): Median Rental Price - Four Bedrooms - San Francisco, CA
// ZILLOW/C9_MRPCC - Zillow Home Value Index (City): Median Rental Price - Condo/Co-op - San Francisco, CA


// Indicator codes for Median Rental Price:

// MRPST  - Studio
// MRP1B  - One Bedroom
// MRP2B  - Two Bedrooms
// MRP3B  - Three Bedrooms
// MRP4B  - Four Bedrooms
// MR51B  - Five Or More Bedrooms
// MRPCC  - Condo/Co-op
// MRPDT  - Duplex/Triplex
// MRPSF  - Single-Family Residence
// MRPMF  - Multi-Family Residence
// MRPAH  - All Homes




// City Codes:
//
// C503 - South San Francisco, CA
// C9 - San Francisco, CA
// C3036 - Sausalito, CA

