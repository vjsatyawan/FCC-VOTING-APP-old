'use strict';

var appUrl = window.location.origin;
var ajaxFunctions = {
   ready: function ready (fn) {
      if (typeof fn !== 'function') {
         return;
      }

      if (document.readyState === 'complete') {
         return fn();
      }

      document.addEventListener('DOMContentLoaded', fn, false);
   },
   ajaxRequest: function ajaxRequest (method, url, data, callback) {
      var xmlhttp = new XMLHttpRequest();

      console.log("1"+data)
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
         }
      };

      xmlhttp.open(method, url, true);
      console.log("2"+JSON.stringify(data));
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(data);
   }
};