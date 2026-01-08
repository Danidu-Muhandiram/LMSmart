console.log("CourseWeb Reminder: background running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ASSIGNMENTS_FOUND") {
    console.log("Received assignments from page:");
    console.table(message.payload);
  }
});
