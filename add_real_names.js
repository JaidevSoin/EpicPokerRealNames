(function() {
  window.usernameToRealNameMap = {}

  // Get all the username elements in the page, check if the username has a matching real name, and if so, and if hasn't already been inserted, insert it
  function addRealNames() {
    var realNameClass = 'realName';
    var userNameElements = document.querySelectorAll('.player md-card-content .name');

    for (userNameElement of userNameElements) {
      var userName = userNameElement.innerHTML;

      if (userName in window.usernameToRealNameMap) {
        // If we have a matching real name for a user name
        var realNameElement;
        var realName = window.usernameToRealNameMap[userName];

        // First check if we already have an element that contains a real name
        realNameElement = userNameElement.parentNode.querySelector('.' + realNameClass);

        if (realNameElement === null) {
          // If this doesn't exist already, add the element along with the real name
          realNameElement = document.createElement('span');
          realNameElement.innerHTML = realName;
          realNameElement.className = realNameClass;
          realNameElement.style = 'margin: 6px 0 -2px 0; font-size: .75rem';
          userNameElement.parentNode.insertBefore(realNameElement, userNameElement);

        } else if (realNameElement.innerHTML != realName) {
          // Otheriwise, check if the element already contains the correct real name, and if not, replace it
          realNameElement.innerHTML = realName;
        }
      }
    }  
  }

  function fetchRealNamesList() {
    // Request the list of real names
    var usernameToRealNameMapScript = document.createElement('script');
    var random = Math.round(Math.random() * 100000000);
    usernameToRealNameMapScript.setAttribute('src','https://jaidevsoin.github.io/EpicPokerRealNames/username_to_real_name_map.js?random=' + random);
    document.head.appendChild(usernameToRealNameMapScript);
  }

  // Start a loop that calls addRealNames() every 5 seconds
  function startAddRealNamesLoop() {
    setInterval(function(){
      addRealNames();
    }, 5 * 1000);
  }

  // Start a loop that calls fetchRealNamesList() every 5 minutes
  function startFetchRealNamesListLoop() {
    fetchRealNamesList();

    setInterval(function(){
      fetchRealNamesList();
    }, 5 * 60 * 1000);
  }

  startAddRealNamesLoop();
  startFetchRealNamesListLoop();
})();