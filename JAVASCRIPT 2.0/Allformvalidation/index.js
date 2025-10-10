function myform(e) {
    e.preventDefault();
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confpass").value;
    let mobile = document.getElementById("mobile_number").value;
    let email = document.getElementById("email").value;

//    user vaildation

   if (userName == "") {
    document.getElementById("username_msg").innerHTML = " ** please fill the userName field";
    document.getElementById("username_msg").style.color = "red";
    return false;

   } else if (userName.length <= 2 || userName.length > 20) {
    document.getElementById("username_msg").innerHTML = "** please enter the length 2 to 20";
    document.getElementById("username_msg").style.color = "red";
    return false;

   } else if (!NaN(userName)) {
    document.getElementById("username_msg").innerHTML = "** only character are allowed";
    document.getElementById("username_msg") .style.color = "red";
    return false;

   } 

    else {
        document.getElementById("username_msg").innerHTML = ""
    }

    // pass validation

    if (password == "") {
        document.getElementById("pass_msg").innerHTML = " ** please fill the password field";
        document.getElementById("pass_msg").style.color = "red";
        return false;

    } else if (password != confirmPassword) {
        document.getElementById("confpass_msg").innerHTML = " ** password not matched"
        document.getElementById("confpass_msg").style.color = "red";
        return false;
    }

    else {
        document.getElementById("pass_msg").innerHTML = ''
    }

    // confirpass validation


    if (confirmPassword == "") {
        document.getElementById("confpass_msg").innerHTML = " ** please fill the confirmpassword field"
        document.getElementById("confpass_msg").style.color = "red";
        return false;
    }

    else {
        document.getElementById("confpass_msg").innerHTML = ''
    }

    // mobile number validation

    if (mobile == "") {
        document.getElementById("mobile_msg").innerHTML = " ** please fill the mobile field";
        document.getElementById("mobile_msg").style.color = "red";
        return false;

    } else if (isNaN(mobile)) {
        document.getElementById("mobile_msg").innerHTML = " ** please enter a digit not a character";
        document.getElementById("mobile_msg").style.color = "red";
        return false;

    } else if (mobile.length != 10) {
        document.getElementById("mobile_msg").innerHTML = " ** mobile number must be a 10 digit";
        document.getElementById("mobile_msg").style.color = "red";
        return false;
    }

    else {
        document.getElementById("mobile_ msg").innerHTML = '';
    }


    // email validation 

    if (email == "") {
        document.getElementById("email_msg").innerHTML = " ** please fill the email field";
        document.getElementById("email_msg").style.color = "red";
        return false;

    } else if (email.indexOf("@")<= 0) {
       document.getElementById("email_msg").innerHTML = "** @ invalid position.";
       document.getElementById("email_msg").style.color = "red";
       return false;
    }

    // nishadahmadm@gmail.com

    else if (
        email.charAt(email.length - 4) != "-" &&
        email.charAt(email.length -3) != "-"
    ) {

     document.getElementById("email_msg").innerHTML = " ** invalid position";
     document.getElementById("email_msg").style.color = "red";
     return false;

  }

  else {
    document.getElementById("email_msg").innerHTML = ''
  }
}