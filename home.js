function openForm() {
    document.getElementById("popupForm").style.display="block";
  }
  
  function closeForm() {
    document.getElementById("popupForm").style.display="none";
  }
  function login(){
    var usr=document.getElementById("email").value
    var u=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usr)
    console.log(u)
    var pass=document.getElementById("psw").value
    var cpass='admin'
    if(u==false)
    {
     document.getElementById("email").style.border="2px solid red"
     return false
    }
   else if(pass!=cpass){
    document.getElementById("msg").innerHTML="Username and password is not matching!"
    return false
    }

  }
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
