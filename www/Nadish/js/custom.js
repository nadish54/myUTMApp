$(function() {
  //Dashboard
  updateClock();

  //News
  var getnewsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 1;
  $.get(getnewsurl, function(data, status) {
    var newsArr = JSON.parse(data);
    if (newsArr != "not found") {
      for (var i = 0; i < newsArr.length; i++) {
        $("#newslist").prepend("<div data-role='collapsible'><h4>" + newsArr[i + 1] + "</h4><h4>" + newsArr[i + 3] + "</h4><p>" + newsArr[i + 2] + ".</p></div>");
        i = i + 3;
      }
    } else {}
  });

  //events
  var geteventsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 2;
  $.get(geteventsurl, function(data, status) {
    var eventsArr = JSON.parse(data);
    if (eventsArr != "not found") {
      for (var i = 0; i < eventsArr.length; i++) {
        $("#eventslist").prepend("<div data-role='collapsible'><h4>" + eventsArr[i + 1] + "</h4><h4>Posted On:  " + eventsArr[i + 3] + "</h4><p>Start:  " + eventsArr[i + 4] + ".</p><p>End:  " + eventsArr[i + 5] + ".</p><p>" + eventsArr[i + 2] + ".</p></div>");
        i = i + 5;
      }
    } else {}
  });

  //Timetables
  var gettimetablesurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 3;
  $.get(gettimetablesurl, function(data, status) {
    var timetablesArr = JSON.parse(data);
    if (timetablesArr != "not found") {
      for (var i = 0; i < timetablesArr.length; i++) {
        $("#timetableslist").prepend("<div data-role='collapsible'><h4>" + "Year  " + timetablesArr[i + 1] + "  Semester  " + timetablesArr[i + 2] + "</h4><h4>Posted On:  " + timetablesArr[i + 4] + "</h4><p>" + timetablesArr[i + 3] + ".</p><ul data-role='listview' data-inset='true'><li>Monday:  " + timetablesArr[i + 5] + "</li><li>Tuesday:  " + timetablesArr[i + 6] + "</li><li>Wednesday:  " + timetablesArr[i + 7] + "</li><li>Thursday:  " + timetablesArr[i + 8] + "</li><li>Friday:  " + timetablesArr[i + 9] + "</li><li>Saturday:  " + timetablesArr[i + 10] + "</li><li>Sunday:  " + timetablesArr[i + 11] + "</li></ul></div>");
        i = i + 11;
      }
    } else {}
  });

  //Results
  var getresultsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 4;
  $.get(getresultsurl, function(data, status) {
    var resultsArr = JSON.parse(data);
    if (resultsArr != "not found") {
      for (var i = 0; i < resultsArr.length; i++) {
        $("#resultslist").prepend("<div data-role='collapsible'><h4>" + "Year  " + resultsArr[i + 1] + "  Semester  " + resultsArr[i + 2] + "</h4><h4>Posted On:  " + resultsArr[i + 4] + "</h4><p>" + resultsArr[i + 3] + ".</p><button>Download</button></div>");
        i = i + 4;
      }
    } else {}
  });

  //About
  var getaboutsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 5;
  $.get(getaboutsurl, function(data, status) {
    var aboutArr = JSON.parse(data);
    if (aboutArr != "not found") {
      for (var i = 0; i < 1; i++) {
        $("#aboutspan").prepend("<ul data-role='listview' data-inset='true' data-divider-theme='a'><li data-role='list-divider'>Basic</li><li><p>First Name:</p> " + aboutArr[i] + "</li><li><p>Last Name:</p> " + aboutArr[i + 1] + "</li><li><p>Gender:</p> " + aboutArr[i + 2] + "</li><li><p>Student ID:</p> " + aboutArr[i + 3] + "</li><li data-role='list-divider'>Contact Details</li><li><p>Email Address:</p> " + aboutArr[i + 4] + "</li><li><p>Phone Number:</p> " + aboutArr[i + 5] + "</li></ul>");
      }
    } else {}
  });

  //Weather
  var getweathersurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 6;
  $.get(getweathersurl, function(data, status) {
    var weatherArr = JSON.parse(data);
    if (data != "not found") {
      for (var i = 0; i < weatherArr.length; i++) {

        var dateArr = weatherArr[i].split('/');
        var dateStr = dateArr[1] + "-" + dateArr[0] + "-" + dateArr[2];
        var date = new Date(dateStr);
        var ndateStr = date.toString();
        var ndateArr = ndateStr.split(' ');
        var ndatedisplay = ndateArr[0] + " " + ndateArr[1] + " " + ndateArr[2] + " " + ndateArr[3] + " ";

        $("#weatherlist").append("<div data-role='collapsible'><h4>" + ndatedisplay + "</h4>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 4] + "'/><h1>" + weatherArr[i + 2] + "&#8451;</h1><h3>" + weatherArr[i + 3] + "</h3><p>" + toTime(weatherArr[i + 1]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 8] + "'/><h1>" + weatherArr[i + 6] + "&#8451;</h1><h3>" + weatherArr[i + 7] + "</h3><p>" + toTime(weatherArr[i + 5]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 12] + "'/><h1>" + weatherArr[i + 10] + "&#8451;</h1><h3>" + weatherArr[i + 11] + "</h3><p>" + toTime(weatherArr[i + 9]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 16] + "'/><h1>" + weatherArr[i + 14] + "&#8451;</h1><h3>" + weatherArr[i + 15] + "</h3><p>" + toTime(weatherArr[i + 13]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 20] + "'/><h1>" + weatherArr[i + 18] + "&#8451;</h1><h3>" + weatherArr[i + 19] + "</h3><p>" + toTime(weatherArr[i + 17]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 24] + "'/><h1>" + weatherArr[i + 22] + "&#8451;</h1><h3>" + weatherArr[i + 23] + "</h3><p>" + weatherArr[i + 21] + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 28] + "'/><h1>" + weatherArr[i + 26] + "&#8451;</h1><h3>" + weatherArr[i + 27] + "</h3><p>" + toTime(weatherArr[i + 25]) + "</p></div></div></div>" +
          "</div><br/>" +

          "<div class='ui-grid-solo'>" +
          "<div class='ui-block-a'> <div class='weather-wrapper'><div class='weather-card'><img class='weather-icon' src='images/" + weatherArr[i + 32] + "'/><h1>" + weatherArr[i + 30] + "&#8451;</h1><h3>" + weatherArr[i + 31] + "</h3><p>" + toTime(weatherArr[i + 29]) + "</p></div></div></div>" +
          "</div><br/>" +

          "</div><br/>");
        i = i + 32;
      }
    } else {}
  });
});

function toTime(time) {
  var int = time.length;

  if (int == 3) {
    var f = time.charAt(0);
    return "At Time " + f + ":00.";
  } else if (int == 4) {
    var f = time.charAt(0);
    var g = time.charAt(1);
    return "At Time " + f + g + ":00.";
  } else {}
}

//Change password
function ChangePasswordForm() {
  var currpass = document.getElementById('currpass').value;
  var newpass = document.getElementById('newpass').value;
  var renewpass = document.getElementById('renewpass').value;

  var getcontacturl = "http://127.0.0.1/myUTMDB/changepassword.php?currpass=" + currpass.trim() + "&newpass=" + newpass.trim() + "&renewpass=" + renewpass.trim();
  $.get(getcontacturl, function(data, status) {
    if (data == "Success") {
      $.alert({
        title: 'Password Successfully Changed!',
        content: "",
        closeIcon: true,
        buttons: {
          Okay: function() {
            window.location.href = 'index.html';
          }
        }
      });
      ResetPasswordForm();
    } else {
      $.alert({
        title: 'Error!',
        content: data,
        closeIcon: true
      });
    }
  });
}

function ResetPasswordForm() {
  document.getElementById('currpass').value = "";
  document.getElementById('newpass').value = "";
  document.getElementById('renewpass').value = "";
}

//Contact US
function submitMessage() {
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (ValidateEmail(email) == true) {
    var getcontacturl = "http://127.0.0.1/myUTMDB/contact.php?email=" + email.trim() + "&subject=" + subject.trim() + "&message=" + message.trim();
    $.get(getcontacturl, function(data, status) {
      if (data == "Success") {
        $.alert({
          title: 'Message Successfully Sent!',
          content: "",
          closeIcon: true
        });

        ResetContactForm();
      } else {
        $.alert({
          title: 'Error!',
          content: data,
          closeIcon: true
        });
      }
    });
  } else {
    $.alert({
      title: 'Error!',
      content: "Email is not valid. Please enter a good one and try again.",
      closeIcon: true
    });
  }
}

function ResetContactForm() {
  document.getElementById('email').value = "";
  document.getElementById('subject').value = "";
  document.getElementById('message').value = "";
}

//Logout
function signout() {
  var getresultsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 10;
  $.get(getresultsurl, function(data, status) {
    if (data == true) {
      location.href = 'index.html';
    }
  });
}

//Check
function check() {
  var getresultsurl = "http://127.0.0.1/myUTMDB/dashboard.php?operation=" + 11;
  $.get(getresultsurl, function(data, status) {
    if (data != "Exist") {
      location.href = 'index.html';
    } else {}
  });
}

//Email Validation
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function updateClock(){
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " ";
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

setInterval('updateClock()', 1000 )
