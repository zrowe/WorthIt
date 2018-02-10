// Given an object containing "low", "medium" and "high" payments,
// plot the housing options into the housing display.
function showHousingOptions(tiers) {
    $("tbody").empty()

    var query = firebase.database().ref("cities").orderByKey();
    query.once("value")

        .then(function(snapshot) {
            var key = snapshot.key;
            var childData = snapshot.val();
            Object.keys(childData).forEach(function(key) {
                displayCity(key, childData[key], tiers);
            });
        });

    // matchup price vs payment for a city and push to housing options view.
    function displayCity(city, house, tiers) {

        var maxPayment = tiers.low
        var lowTier = showTier(house, maxPayment);

        var maxPayment = tiers.medium
        var midTier = showTier(house, maxPayment);

        var maxPayment = tiers.high
        var highTier = showTier(house, maxPayment);

        writeRow(city, lowTier, midTier, highTier);
    }

    // write a row to the housing table view 
    function writeRow(city, t1, t2, t3) {
        var a = $("#info-output");

        a.append(`<tr>
                      <td>
                        ${city}
                      </td>
                      <td>
                        ${t1}
                      </td>
                      <td>
                        ${t2}
                      </td>
                      <td>
                        ${t3}
                      </td>
                    <tr>`);

    }
    //Return a string containing housing options given a price
    function showTier(house, payment) {

        var codes = {
            MRP1B: "1 Bedroom",
            MRP2B: "2 Bedroom",
            MRP3B: "3 Bedroom",
            MRP4B: "4 Bedroom",
            MRPAH: "All Housing",
            MRPCC: "Condo/Co-op",
            MRPDT: "Duplex/Triplex",
            MRPMF: "Multi-Family",
            MRPSF: "Single-Family",
            MRPST: "Studio",
        };

        var options = ""
        Object.keys(house).forEach(function(key) {
            var price = house[key]
            if (payment >= price) {
                options = options + codes[key] + "<br>" // put each on seperate line
            }
        })
        return options;
    };
};