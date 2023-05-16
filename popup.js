document.getElementById("toggleButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  console.log("something");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["script.js"],
  });
});
document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: getDesignModeValue,
      },
      function (result) {
        let message = result[0].result;
        if (chrome.runtime.lastError) {
          document.getElementById("status").textContent =
            "Error: " + chrome.runtime.lastError.message;
        } else {
          let status = document.getElementById("status");
          status.textContent = "Design Mode: " + message;
          if (message == "on") {
            status.style.color = "green";
          } else {
            status.style.color = "red";
          }
        }
      }
    );
  });
});
function getDesignModeValue() {
  return document.designMode;
}
chrome.runtime.onMessage.addListener((message) => {
  const status = document.getElementById("status");
  status.textContent = "Design Mode: " + message;
  if (message == "on") {
    status.style.color = "green";
  } else {
    status.style.color = "red";
  }
});
