// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDFHcOspPVbPl9ASzDhmkBmtVBrG7_TEyg",
  authDomain: "code-drills.firebaseapp.com",
  databaseURL: "https://code-drills.firebaseio.com",
  projectId: "code-drills",
  storageBucket: "code-drills.appspot.com",
  messagingSenderId: "857596890224",
  appId: "1:857596890224:web:d1b880c63a0e0e20f7b8b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// event listener for submit button
$(".submit").on("click", function (event) {
  // prevent form submit button from doing default things like sending information and refreshing the page
  event.preventDefault();

  // form input validation

  // first, we select the inputs we need to validate (passwords)
  var email = $("#email");
  var password = $("#password");
  var confirm = $("#confirm");

  // now we validate them

  // email field input validation
  if (email.val().length < 1) { // cannot be empty
    // change the email input's placeholder and set focus
    email.attr("placeholder", "This field cannot be empty!")
    email.focus();
  }

  // password field input validation
  else if (password.val().length < 6) { // cannot be less than 6 characters
    // change password input's placeholder and set focus
    password.attr("placeholder", "Password must be at least 6 characters!")
    password.focus();
  }

  // confirm field input validation
  else if (confirm.val() !== password.val()) { // doesn't match password
    // empty confirm field
    confirm.val("");
    // set placeholder to notify user
    confirm.attr("placeholder", "Doesn't match password. Try again.");
    // set focus on this field
    confirm.focus();
  }

  // if all validations check out
  else {
    // use firebase to register
    firebase.auth().createUserWithEmailAndPassword(email.val(), password.val())
      // after user is registered
      .then(function () {
        // user is now registered, so...
        // let's clear the input fields
        email.val("");
        password.val("");
        password.attr("placeholder", "");
        confirm.val("");
        confirm.attr("placeholder", "");

        // then tell them
        alert("You have successfully registered!")
      })
      // error handling
      .catch(function (error) {
        // uh oh, something broke. let's tell them why
        alert("Error: " + error.message)
      })
  }
})