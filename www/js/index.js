//For carousel
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

//for Menu Panel
$(document).on('pagecreate', '[data-role="page"]', function() {
  $('<div>').attr({
    'id': 'mypanel',
    'data-role': 'panel'
  }).appendTo($(this));
  $(document).on('click', '#open-panel', function() {
    $.mobile.activePage.find('#mypanel').panel("open");
  });
});

// Top 3 News
$(document).ready(function() {
  function fetch_data() {
    $.ajax({
      url: "http://192.168.7.144/myUTMDB/displaytopnews.php",
      method: "POST",
      success: function(data) {
        $('#topthreenews').html(data);
        //$('#topthreenews').div("refresh");
      }
    });
  }
  fetch_data();
});

// Top 3 event
$(document).ready(function() {
  function fetch_data() {
    $.ajax({
      url: "http://192.168.7.144/myUTMDB/displaytopevent.php",
      method: "POST",
      success: function(data) {
        $('#topthreeevent').html(data);
        //$('#topthreeevent').div("refresh");
      }
    });
  }
  fetch_data();
});

// News
$(document).ready(function() {
  function fetch_data() {
    $.ajax({
      url: "http://192.168.7.144/myUTMDB/displaynews.php",
      method: "POST",
      success: function(data) {
        $('#news_table_data').html(data);
        $('#newstable').table("refresh");
      }
    });
  }
  fetch_data();
});

// Events
$(document).ready(function() {
  function fetch_data() {
    $.ajax({
      url: "http://192.168.7.144/myUTMDB/displayevent.php",
      method: "POST",
      success: function(data) {
        $('#event_table_data').html(data);
        $('#eventtable').table("refresh");
      }
    });
  }
  fetch_data();
});

// courses
$(document).ready(function() {
  function fetch_data() {
    $.ajax({
      url: "http://192.168.7.144/myUTMDB/displaycourses.php",
      method: "POST",
      success: function(data) {
        $('#courses_table_data').html(data);
        $('#coursestable').table("refresh");
      }
    });
  }
  fetch_data();
});

//submit contact us
function submitMessage() {
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (ValidateEmail(email) == true) {
    var getcontacturl = "http://192.168.7.144/myUTMDB/contact.php?email=" + email.trim() + "&subject=" + subject.trim() + "&message=" + message.trim();
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

// reset contact us form
function ResetContactForm() {
  document.getElementById('email').value = "";
  document.getElementById('subject').value = "";
  document.getElementById('message').value = "";
}

//Email Validation
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}


// Money MoneyConversion
function MoneyConversion() {
  var price = document.getElementById('price').value;
  var fromCurr = document.getElementById('fromCurr').value;
  var toCurr = document.getElementById('toCurr').value;

  var getcontacturl = "http://192.168.7.144/myUTMDB/moneyconversion.php?from=" + fromCurr.trim() + "&to=" + toCurr.trim() + "&amount=" + price.trim();
  //alert(getcontacturl);
  $.get(getcontacturl, function(data, status) {
    if (data != null) {
      document.getElementById('Convertedprice').innerHTML = data;

      //alert(data);
    } else {
      $.alert({
        title: 'Error!',
        content: data,
        closeIcon: true
      });
    }
  });
}
