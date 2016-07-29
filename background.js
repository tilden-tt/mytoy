/* git config example
git config --global https.proxy https://proxynj.zte.com.cn:80
git config --global http.proxy http://proxynj.zte.com.cn:80
git clone https://github.com/tilden-tt/mytoy.git
git config --global credential.helper store
$ git config --global user.name "tilden-tt"
$ git config --global  user.email 396614336@qq.com

git config --global push.default simple */

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
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
