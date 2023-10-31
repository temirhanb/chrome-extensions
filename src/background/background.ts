function injectScript(tabId) {

  chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      files: ['index.js'],
    }
  );
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.url) {

    injectScript(tabId);
  }
});
