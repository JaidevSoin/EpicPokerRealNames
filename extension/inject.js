var scriptToInject = document.createElement('script');
scriptToInject.src = chrome.runtime.getURL('add_real_names.js');
scriptToInject.onload = function() {
  this.remove();
};

(document.head || document.documentElement).appendChild(scriptToInject);
