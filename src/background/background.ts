chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
      return chrome.tabs.sendMessage(tabId, {
        message: 'changed',
        url: changeInfo.url
      })
    }
    return chrome.tabs.sendMessage(tabId, {
      message: 'init',
      url: tab.url
    })
  }
);
