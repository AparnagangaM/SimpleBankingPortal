function checkform(theform){

// function validate() {
    var fname=document.getElementById("fn").value
    var lname=document.getElementById("ln").value
    var p=document.getElementById("phn").value
    var e=document.getElementById("eml").value
    var c=document.getElementById("cty").value
    var s=document.getElementById("state").value

    var pass=document.getElementById("psw").value
    var cpass=document.getElementById("cnf").value
        
    if(fname.length==0)
    {
        document.getElementById("fnmsg").innerHTML="**Please fill the FirstName"
        document.getElementById("fn").style.border="1px solid red"
        return false
    }
    else if(fname.length<3)
    {
        document.getElementById("fnmsg").innerHTML="**FirstName Can't be less than 3 letters"
        document.getElementById("fn").style.border="1px solid red"

        return false
    }
    else if(fname.length>=15)
    {
        document.getElementById("fnmsg").innerHTML="**FirstName Can't contain more than 15 letters"
        document.getElementById("fn").style.border="1px solid red"

        return false
    }

    else if(lname.length==0)
    {
        document.getElementById("lnmsg").innerHTML="**Please fill the LastName"
        document.getElementById("ln").style.border="1px solid red"

        return false
    }
    else if(lname.length<3)
    {
        document.getElementById("lnmsg").innerHTML="**LastName Can't be less than 3 letters"
        document.getElementById("ln").style.border="1px solid red"

        return false
    }
    else if(lname.length>=15)
    {
        document.getElementById("lnmsg").innerHTML="**LastName Can't contain more than 15 letters"
        document.getElementById("ln").style.border="1px solid red"

        return false
    }
    else if(e.length==0)
    {
     document.getElementById("emlmsg").innerHTML="Please enter the Email Address"
     document.getElementById("eml").style.border="1px solid red"

     return false
    }
    else if(e.length<10)
    {
     document.getElementById("emlmsg").innerHTML="Email should contain a username"
     document.getElementById("eml").style.border="1px solid red"

     return false
    }
   
    else if(p.length==0)
    {
     document.getElementById("phnmsg").innerHTML="Please enter the Phone Number"
     document.getElementById("phn").style.border="1px solid red"
     return false
    }
    else if(isNaN(p))
    {
        document.getElementById("phnmsg").innerHTML="Phone number can contain only numbers"
        document.getElementById("phn").style.border="1px solid red"

        return false
    }
    else if(p.length<10)
    {
        document.getElementById("phnmsg").innerHTML="Phone number can't be less than 10 digits"
        document.getElementById("phn").style.border="1px solid red"

        return false
    }
    else if(p.length>10)
    {
        document.getElementById("phnmsg").innerHTML="Phone number can't contain more than 10 digits"
        document.getElementById("phn").style.border="1px solid red"

        return false
    }
    else if(p.charAt(0)<6)
    {
        document.getElementById("phnmsg").innerHTML="Phone number should start from 6 or 7 or 8 or 9"
        document.getElementById("phn").style.border="1px solid red"

        return false
    }
    else if(c.length==0)
    {
     document.getElementById("ctymsg").innerHTML="Please enter your city name"
     document.getElementById("cty").style.border="1px solid red"

     return false
    }
    else if(s.value=="")
    {
     document.getElementById("statemsg").innerHTML="Please select your state"
     document.getElementById("state").style.border="1px solid red"

     return false
    }
   
    else if(pass.length==0)
    {
        document.getElementById("pswmsg").innerHTML="Please Enter the Password"
        document.getElementById("psw").style.border="1px solid red"

        return false
    }
    else if(pass.length<3)
    {
        document.getElementById("pswmsg").innerHTML="Please Set a Strong Password"
        document.getElementById("psw").style.border="1px solid red"

        return false
    }
    else if(pass.length>15)
    {
        document.getElementById("pswmsg").innerHTML="Password can't contain more than 15 letters"
        document.getElementById("psw").style.border="1px solid red"

        return false
    }
    else if(pass!=cpass)
    {
        document.getElementById("cnfmsg").innerHTML="Password and confirm password is not matching"
        document.getElementById("cnf").style.border="1px solid red"

        return false
    }

    
        var g=document.signup.gender
        for(let i=0;i<g.length;i++)
        {
            if(g[i].checked)
            {
                return true
            }
        }
        document.getElementById("gmsg").innerHTML="Please select the Gender"
        return false   
    
// }
// function checkform(theform){
    var why = "";
    
    if(theform.CaptchaInput.value == ""){
    why += "- Please Enter CAPTCHA Code.\n";
    }
    if(theform.CaptchaInput.value != ""){
    if(ValidCaptcha(theform.CaptchaInput.value) == false){
    why += "- The CAPTCHA Code Does Not Match.\n";
    }
    }
    if(why != ""){
    alert(why);
    return false;
    }
    }
    
    var a = Math.ceil(Math.random() * 9)+ '';
    var b = Math.ceil(Math.random() * 9)+ '';
    var c = Math.ceil(Math.random() * 9)+ '';
    var d = Math.ceil(Math.random() * 9)+ '';
    var e = Math.ceil(Math.random() * 9)+ '';
    
    var code = a + b + c + d + e;
    document.getElementById("txtCaptcha").value = code;
    document.getElementById("CaptchaDiv").innerHTML = code;
    
    // Validate input against the generated number
    function ValidCaptcha(){
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
    if (str1 == str2){
    return true;
    }else{
    return false;
    }
    }
    
    // Remove the spaces from the entered and generated code
    function removeSpaces(string){
    return string.split(' ').join('');
    }