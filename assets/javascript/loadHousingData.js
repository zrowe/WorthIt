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



    // Indicator codes for Median Rental Price.  If we use different metrics, we would
    // change this list:

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

    var indicatorCodes = [
        MRPST, // Studio
        MRP1B, // One Bedroom
        MRP2B, // Two Bedrooms
        MRP3B, // Three Bedrooms
        MRP4B, // Four Bedrooms
        MR51B, // Five Or More Bedrooms
        MRPCC, // Condo/Co-op
        MRPDT, // Duplex/Triplex
        MRPSF, // Single-Family Residence
        MRPMF, // Multi-Family Residence
        MRPAH // All Homes
    ];


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



// City Codes:
//
// C503 - South San Francisco, CA
// C9 - San Francisco, CA
// C3036 - Sausalito, CA



// cityCodes table contains the city code from Quandle
// for ewach city in the bay area.  List list of cities
// in the bay area came from here:
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_the_San_Francisco_Bay_Area
//

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
]