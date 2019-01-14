// Problem 2:
//
// Ask the user to enter a 4 digit code. Ask the user to enter the password again.
// If the passwords are the same print "Password is set." If the passwords are different print "ERROR, Passwords are different."



var firstcode=parseInt(prompt("Please enter your four digit code"));
var secondcode=parseInt(prompt("Please re-enter your four digit code"));

  if (firstcode === secondcode) {
      console.log("Password is set!");

  }
else
    if (firstcode != secondcode)
    console.log("Passwords are different");



