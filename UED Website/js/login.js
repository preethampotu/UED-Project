
    function validateForm() {
        var un = document.loginCheck.ur.value;
        var pw = document.loginCheck.pa.value;
        var username = "bearcat"; 
        var password = "bearcat";
        var user1="anurag";
        var pass1="test123";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else if((un == user1) && (pw == pass1))
        {
          return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
    
  }
  function validateadminForm() {
    var un = document.loginaform.urs.value;
    var pw = document.loginaform.paw.value;
    var username = "bearcat"; 
    var password = "bearcat";
    var user1="anurag";
    var pass1="test123";
    if ((un == username) && (pw == password)) {
        return true;
    }
    else if((un == user1) && (pw == pass1))
    {
      return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }

}   
function goToRegister(){
    window.location.href = "C:/Users/S533713/Documents/UED Website/register.html";
  }








