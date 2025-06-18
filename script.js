//your JS code here. If required.
// Get browser name and version
let userAgent = navigator.userAgent;
let browserName = navigator.appName;
let version = navigator.appVersion;

// Fallback logic to improve accuracy for modern browsers
if (userAgent.includes("Chrome")) {
  browserName = "Chrome";
  version = userAgent.match(/Chrome\/([\d.]+)/)[1];
} else if (userAgent.includes("Firefox")) {
  browserName = "Firefox";
  version = userAgent.match(/Firefox\/([\d.]+)/)[1];
} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
  browserName = "Safari";
  version = userAgent.match(/Version\/([\d.]+)/)[1];
} else if (userAgent.includes("Edge")) {
  browserName = "Edge";
  version = userAgent.match(/Edg\/([\d.]+)/)[1];
} else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
  browserName = "Internet Explorer";
  version = userAgent.match(/(MSIE\s|rv:)([\d.]+)/)[2];
}

// Display message
let infoDiv = document.getElementById("browser-info");
infoDiv.innerText = `You are using ${browserName} version ${version}`;
