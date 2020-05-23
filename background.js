// this is the background code...

// listen for our browerAction to be clicked
// chrome.browserAction.onClicked.addListener(function (tab) {
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	// for the current tab, inject the "inject.js" file & execute it

	if (changeInfo.status == 'complete' && tab.active) {
	    chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		})
  }
	
});