chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
	return {redirectUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAGxJREFUeF7tyMEJwkAQRuFf5ipMKxYQiJ3Z2nSwrWwBA0+DQZcdxEOueaePp9+dQZFB7GpUcURSVU66yVNFj6LFICatThZB6r/ko/pbRpUgilY0Cbw5sNmb9txGXUKyuH7eV25x39DtJXUNPQGJtWFV+BT/QAAAAABJRU5ErkJggg=="}; 
  },
  {urls: ["http://*/*jpg", "https://*/*jpg","http://*/*png", "https://*/*png","http://*/*gif", "https://*/*gif"]},
  ["blocking"])
