chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: details.url.indexOf("://www.wildberries.ru/") != -1};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
