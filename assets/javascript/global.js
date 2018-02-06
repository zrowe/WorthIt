// <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>


// global variables
var citiesList = [];     // list of nearby cites for looking up housing data
var currentFilter = [];  // the current setting of the filter for the housing display


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-KLx5wiwcy7aXHqXzWMLhUkoAgv54mIk",
    authDomain: "worth-it-7ba43.firebaseapp.com",
    databaseURL: "https://worth-it-7ba43.firebaseio.com",
    projectId: "worth-it-7ba43",
    storageBucket: "worth-it-7ba43.appspot.com",
    messagingSenderId: "469432360026"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

