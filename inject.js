// this is the code which will be injected into a given page...

(function() {

	var realNameScript = document.createElement('script');
	var random = Math.round(Math.random() * 100000000);
	realNameScript.setAttribute('src','https://codepen.io/xai_/pen/QWjYzZv.js?random=' + random);
	document.head.appendChild(realNameScript);

})();