( function(){
  document.cookie = "name=Ed";
  document.cookie = "username=emr";
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  console.log("document.cookie: " + document.cookie);
  var cookieStrings = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < cookieStrings.length; i++){
    var rawCookie = cookieStrings[i].trim().split("=");
    cookies[rawCookie[0]] = rawCookie[1];
  }
  console.log(cookies.name);//Ed
  console.log(cookies.username);//emr

  //Change a Cookie with JavaScript
  document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

  //Delete a Cookie with JavaScript
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

/* */
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
 /**/
})();
