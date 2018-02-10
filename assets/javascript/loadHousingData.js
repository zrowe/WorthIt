var debug = false; // my handy console debug flag


// ++++++++
//
// uncomment these if running this standalone.  These are in global.js

// var currentLocation = "San Francisco" // hard coded for now
// var citiesList = []; // is in global.js


// cityCodes table contains the city code from Quandle
// for ewach city in the bay area.  List list of cities
// in the bay area came from here:
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_the_San_Francisco_Bay_Area

var cityCodes = [
    ["Alameda", "417"],
    ["Albany", "1681"],
    ["American Canyon", "1707"],
    ["Antioch", "238"],
    ["Atherton", "3688"],
    ["Belmont", "1255"],
    ["Belvedere", "6938"],
    ["Benicia", "1466"],
    ["Berkeley", "169"],
    ["Brentwood", "492"],
    ["Brisbane", "4875"],
    ["Burlingame", "1070"],
    ["Calistoga", "3696"],
    ["Campbell", "703"],
    ["Clayton", "3062"],
    ["Cloverdale", "3029"],
    ["Colma", "6644"],
    ["Concord", "160"],
    ["Corte Madera", "3240"],
    ["Cotati", "2770"],
    ["Cupertino", "537"],
    ["Danville", "641"],
    ["Daly City", "221"],
    ["Dixon", "1516"],
    ["Dublin", "876"],
    ["East Palo Alto", "1198"],
    ["El Cerrito", "1341"],
    ["Emeryville", "2982"],
    ["Fairfax", "3626"],
    ["Fairfield", "217"],
    ["Foster City", "1004"],
    ["Fremont", "72"],
    ["Gilroy", "489"],
    ["Half Moon Bay", "2350"],
    ["Hayward", "104"],
    ["Healdsburg", "1998"],
    ["Hercules", "1894"],
    ["Hillsborough", "2714"],
    ["Lafayette", "1480"],
    ["Larkspur", "4116"],
    ["Livermore", "256"],
    ["Los Altos Hills", "3521"],
    ["Los Altos", "1084"],
    ["Los Gatos", "932"],
    ["Martinez", "693"],
    ["Mill Valley", "1174"],
    ["Millbrae", "1476"],
    ["Milpitas", "403"],
    ["Monte Sereno", "5886"],
    ["Moraga", "2631"],
    ["Morgan Hill", "1031"],
    ["Mountain View", "328"],
    ["Napa", "234"],
    ["Newark", "718"],
    ["Novato", "480"],
    ["Oakland", "31"],
    ["Oakley", "893"],
    ["Orinda", "2434"],
    ["Pacifica", "883"],
    ["Palo Alto", "402"],
    ["Petaluma", "358"],
    ["Piedmont", "2640"],
    ["Pinole", "2220"],
    ["Pittsburg", "338"],
    ["Pleasant Hill", "928"],
    ["Pleasanton", "369"],
    ["Portola Valley", "5131"],
    ["Redwood City", "299"],
    ["Richmond", "283"],
    ["Rio Vista", "5691"],
    ["Rohnert Park", "995"],
    ["Ross", "10570"],
    ["Saint Helena", "3694"],
    ["San Anselmo", "1966"],
    ["San Bruno", "820"],
    ["San Carlos", "1023"],
    ["San Francisco", "9"],
    ["San Jose", "8"],
    ["San Leandro", "223"],
    ["San Mateo", "219"],
    ["San Pablo", "588"],
    ["San Rafael", "401"],
    ["San Ramon", "353"],
    ["Santa Clara", "167"],
    ["Santa Rosa", "84"],
    ["Saratoga", "1038"],
    ["Sausalito", "3036"],
    ["Sebastopol", "1227"],
    ["Sonoma", "835"],
    ["South San Francisco", "503"],
    ["Suisun City", "1407"],
    ["Tiburon", "2941"],
    ["Union City", "407"],
    ["Vacaville", "211"],
    ["Vallejo", "166"],
    ["Walnut Creek", "316"],
    ["Windsor", "1266"],
    ["Woodside", "3084"],
    ["Yountville", "7357"]
];

// Indicator codes for Median Rental Price.  If we use different metrics, we would
// change this list:

var indicatorCodes = [
    "MRPST", // Studio
    "MRP1B", // One Bedroom
    "MRP2B", // Two Bedrooms
    "MRP3B", // Three Bedrooms
    "MRP4B", // Four Bedrooms
    "MR51B", // Five Or More Bedrooms
    "MRPCC", // Condo/Co-op
    "MRPDT", // Duplex/Triplex
    "MRPSF", // Single-Family Residence
    "MRPMF", // Multi-Family Residence
    "MRPAH" //  All Homes
];


// function to get a list of cities neaby the city that it's called with
// this is likely the city where the user is searching for a job.
// it should possibly return distance from ground zero as well, but
// will ad when necessary.

function getNearbyCities(currentLocation) {
    if (debug) { console.log("function getNearbyCities:"); }
    citiesList = [
        "San Francisco",
        "Daly City",
        "South San Francisco",
        "Alameda",
        "Oakland",
        "Berkeley"
    ];
    if (debug) { console.log(citiesList); }
    return citiesList
}

// test if data in housing data is new enough, if not new enough then call loadhousing data. 
// otherwise, do nothing.

function housingDataStale() {
    if (debug) { console.log("function checkAgeOfHousingData:"); }
    var d = new Date();
    var now = d.getTime(); // get now in UTC
    var result;
    // if date does not exist or date is older than x

    return dataRef.ref("/metadata").once("value")
        .then(function(snapshot) {
            if (debug) { console.log("fresh snap: " + snapshot.val().lastUpdate); };
            if (snapshot.val().lastUpdate == -1) {
                if (debug) { console.log("lastupdate is -1"); };
                result = true
            } else if (snapshot.val().lastUpdate < now - 604800000) {
                // arbitrary 1 week delay on recache
                if (debug) { console.log("last update is old: " + snapshot.val().lastUpdate); };
                result = true;
            } else {
                if (debug) { console.log("lastupdate is OK"); };
                result = false;
            }
            return housingCallback(result);
        })
        .catch(function(error) {
            if (debug) { console.log("Remove failed: " + error.message) };
            result = true
            return housingCallback(result);
        });
}


// based upon a list of cities, populate firebase with the cost data of each type of housing for each city
function loadHousingData(citiesList) {
    if (debug) { console.log("function loadHousingData:"); }
    var variable = housingDataStale();
};

function housingCallback(boolean) {
    if (debug) { console.log(`Boolean ${boolean}`); };
    if (boolean) {

        // write a timestamp -- do it at beginning to block aonyone else from starting an update.
        var d = new Date();
        var now = d.getTime(); // get now in UTC

        firebase.database().ref("metadata").set({ lastUpdate: now });


        // for each indicator code within each city,
        // fetch the most recent sample from Quandle and
        // write into firebase.  

        // child is:
        //      /cities/{cityname}/{indicatorCode} : value
        //
        for (var k = 0; k < citiesList.length; k++) {

            var targetcity = citiesList[k];

            for (var i = 0; i < cityCodes.length; i++) {

                if (cityCodes[i][0] === targetcity) {

                    if (debug) { console.log("TargetCity: " + targetcity); }

                    for (var j = 0; j < indicatorCodes.length; j++) {

                        getCityMetricPair(cityCodes[i][0], cityCodes[i][1], indicatorCodes[j])

                    }; // J loop
                };
            }; // i loop
        }; // k loop
    };
}

// go get and store the data for a single city/mrtic pair

// TODO: handle 404 better.  404 occurs because not all cities have all the metrics.

function getCityMetricPair(city, citycode, indicator) {

    // ZILLOW/{AREA_CATEGORY}{AREA_CODE}_{INDICATOR_CODE}
    var queryURL = "https://www.quandl.com/api/v3/datasets/ZILLOW/";
    queryURL = queryURL + "C" + citycode + "_" + indicator;
    queryURL = queryURL + ".json?api_key=xec-Z333cB8oHBtxz_kB&rows=1";

    $.ajax({
            url: queryURL,
            headers: { 'Access-Control-Allow-Origin': '*' },
            async: false,
            method: 'GET'
        }).then(function(response) {
            // Save city, housing type, price
            var pair = {};
            pair[indicator] = Math.round(response.dataset.data[0][1]);
            dataRef.ref("cities/" + city).update(pair);
            if (debug) { console.log("write: " + JSON.stringify(pair)); };
        })
        .catch(function(error) {
            if (debug) { console.log("Error:", error); };
        });
}

getNearbyCities(currentLocation); // generate cities list based upon current location
loadHousingData(citiesList); // will update housing data if necessary.