// $(document).ready(function() {

//     // Initialize Firebase
//     var config = {
//         apiKey: "AIzaSyD-KLx5wiwcy7aXHqXzWMLhUkoAgv54mIk",
//         authDomain: "worth-it-7ba43.firebaseapp.com",
//         databaseURL: "https://worth-it-7ba43.firebaseio.com",
//         projectId: "worth-it-7ba43",
//         storageBucket: "worth-it-7ba43.appspot.com",
//         messagingSenderId: "469432360026"
//     };
//     firebase.initializeApp(config);

    var tiers = {
        low: 2000,
        medium: 3000,
        high: 4000
    }

    showHousingOptions(tiers);

    function showHousingOptions(tiers) {
        $("tbody").empty()

        var query = firebase.database().ref("cities").orderByKey();
        query.once("value")

            .then(function(snapshot) {
                // snapshot.forEach(function(childSnapshot){
                var key = snapshot.key;
                var childData = snapshot.val();

                Object.keys(childData).forEach(function(key) {

                    displayCity(key, childData[key], tiers);
                });
            });

        function displayCity(city, house, tiers) {

            console.log(city);
            var maxPayment = tiers.low
            console.log("low")
            var lowTier = showTier(house, maxPayment);
     
            console.log("medium")
            var maxPayment = tiers.medium
            var midTier = showTier(house, maxPayment);
           
            console.log("high")
            var maxPayment = tiers.high
            var highTier = showTier(house, maxPayment);
            
            writeRow(city, lowTier, midTier, highTier);
        }

        function writeRow(city, t1, t2, t3) {
          var a =  $("#info-output");

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
//Return the string containing housing options
        function showTier(house, payment) {

            var options = ""

            Object.keys(house).forEach(function(key) {

              var price = house[key]

              if (payment >= price) {
                 // console.log("key " + key + " price: " + price);
                 options=options + key + " "
              }
            })

            return options;
        };
    }
// };
// });