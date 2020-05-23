(function() {

  // Get all the username elements in the page, check if the username has a matching real name, and if so, and it hasn't already been inserted, insert it
  function addRealNames(usernameToRealNameMap) {
    var realNameClass = 'realName';
    var userNameElements = document.querySelectorAll('.player md-card-content .name');

    for (userNameElement of userNameElements) {
      var realNameAlreadyAdded = userNameElement.parentNode.querySelectorAll('.' + realNameClass).length > 0

      if (!realNameAlreadyAdded) {
        var userName = userNameElement.innerHTML;

        if (userName in usernameToRealNameMap) {
          var realName = usernameToRealNameMap[userName];

          var realNameElement = document.createElement('span');
          realNameElement.innerHTML = realName;
          realNameElement.className = realNameClass;
          realNameElement.style = 'margin: 6px 0 -2px 0; font-size: .75rem';
          userNameElement.parentNode.insertBefore(realNameElement, userNameElement);
        }
      }
    }  
  }

  // Start a loop that calls the above function every 5 seconds, passing in the list of real names
  window.startAddRealNamesLoop = function(usernameToRealNameMap) {
    setInterval(function(){
      addRealNames(usernameToRealNameMap);
    }, 5000);
  }

  // Request the list of real names
  var usernameToRealNameMapScript = document.createElement('script');
  var random = Math.round(Math.random() * 100000000);
  usernameToRealNameMapScript.setAttribute('src','https://jaidevsoin.github.io/EpicPokerRealNames/username_to_real_name_map.js?random=' + random);
  document.head.appendChild(usernameToRealNameMapScript);
  
})();