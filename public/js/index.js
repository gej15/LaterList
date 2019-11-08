$(document).ready(function() {
  // Execute some code here
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMYpMAbjntYhCyxjGlGlbEezOYhxP6HQQ",
    authDomain: "project2-b70da.firebaseapp.com",
    databaseURL: "https://project2-b70da.firebaseio.com",
    projectId: "project2-b70da",
    storageBucket: "project2-b70da.appspot.com",
    messagingSenderId: "494117517998",
    appId: "1:494117517998:web:0da2a85b81a6a310134b3f",
    measurementId: "G-SJ6H5B10ER"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

btnLogin.addEventListener('click', e => {
    const email = txtEmail.val().trim()
    const pass = txtPassword.val().trim()
    const auth = firebase.auth()

    const promise = auth.signInWithEmailAndPassword(email, pass)

    promise.catch(e => console.log(e.message))
})

btnSignUp.addEventListener('click', e => {

    // TODO check for real email
    const email = txtEmail.val().trim()
    const pass = txtPassword.val().trim()
    const auth = firebase.auth()

    const promise = auth.createUserWithEmailAndPassword(email, pass)

    promise.catch(e => console.log(e.message))
})

firebase.auth().onAuthStateChange(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser)
    } else {
        console.log('not logged in')
    }
})

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut()
})


// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

});