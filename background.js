// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Forward the message to the popup
  chrome.action.setPopup({ popup: "popup.html" });
  chrome.runtime.sendMessage(message);
});
