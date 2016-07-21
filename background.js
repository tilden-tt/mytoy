/* update by git */
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
	//return {redirectUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAGxJREFUeF7tyMEJwkAQRuFf5ipMKxYQiJ3Z2nSwrWwBA0+DQZcdxEOueaePp9+dQZFB7GpUcURSVU66yVNFj6LFICatThZB6r/ko/pbRpUgilY0Cbw5sNmb9txGXUKyuH7eV25x39DtJXUNPQGJtWFV+BT/QAAAAABJRU5ErkJggg=="}; 
	return {redirectUrl:"http://221.130.5.38/videos/other/20160715/57/12/69c8df6ae17fb7195290404b475362c8.f4v"}; 
  },
  //  {urls: ["http://*/*jpg", "https://*/*jpg","http://*/*png", "https://*/*png","http://*/*gif", "https://*/*gif"]},
  {urls: ["*://*/videos/other/*"]},
  ["blocking"])
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'Accept-Encoding') {
        details.requestHeaders.splice(i, 1);
        break;
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]);
