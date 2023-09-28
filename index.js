function validation(){
    let username=document.forms["formfill"]["username"].value;
    let email=document.forms["formfill"]["email"].value;
    let password=document.forms["formfill"]["password"].value;
    let cpassword=document.forms["formfill"]["cpassword"].value;
    
   
if(username ==""){
document.getElementById('result').innerHTML="Enter your username please";
return false;
}
else if(username.length<7){
document.getElementById('result').innerHTML="at least 7 characters";
return false;
}

else if(email ==""){
document.getElementById('email').innerHTML="Enter your email";
return false;

}

else if(password==""){
document.getElementById('pass').innerHTML="Enter your password";
return false;
}
else if(password!==cpassword){
document.getElementById('cpass').innerHTML="your password does not match";
return false;
}


}
var element = document.getElementById("message");
element.style.display = "none";
function changeStyle(){
    if(password==cpassword)
    var element = document.getElementById("message");
    element.style.display = "show";
}






