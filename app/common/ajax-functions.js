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

      console.log("1"+data);
      xmlhttp.open(method, url, true);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(data);

      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
            return xmlhttp.response;
            console.log("xmlhttp.response 1: "+xmlhttp.response);
         }

            console.log("xmlhttp.response 2: "+xmlhttp.response);
         return xmlhttp.response;

            console.log("xmlhttp.response 3: "+xmlhttp.response);
      };




   }
};