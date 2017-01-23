'use strict';

(function () {

   var viewPolls = document.querySelector('#polls');
   var apiUrl = appUrl + '/api/getAllPolls';

   function updatePolls (data) {
      var clicksObject = JSON.parse(data);
      viewPolls.innerHTML = clicksObject[1].answers;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePolls));

   // addButton.addEventListener('click', function () {

   //    ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
   //       ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
   //    });

   // }, false);

   // deleteButton.addEventListener('click', function () {

   //    ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
   //       ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
   //    });

   // }, false);

})();
