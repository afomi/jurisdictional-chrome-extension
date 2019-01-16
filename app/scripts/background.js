'use strict';

var apiURL = "https://www.jurisdictional.org/api/v1/plugins/chrome";

function sendURL() {
  var xhr = new XMLHttpRequest();
  var url = apiURL;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      var json = JSON.parse(xhr.responseText);
      alert("Thank you for submitting " + json.url + " to Jurisdictional.org.");
    }
  };

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0]; // only 1 Current Window
     var tablink = activeTab.url;
     var data = JSON.stringify({ "url": tablink });
     xhr.send(data);
  });
}

// UI Handler
function buttonClick() {
  sendURL();
}

chrome.browserAction.onClicked.addListener(function(tab) {
  buttonClick();
});
