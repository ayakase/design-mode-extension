if (document.designMode === "on") {
  document.designMode = "off";
  chrome.runtime.sendMessage(document.designMode);
} else {
  document.designMode = "on";
  chrome.runtime.sendMessage(document.designMode);
}
