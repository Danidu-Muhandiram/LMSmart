(function () {
  console.log("CourseWeb Reminder: scanning page");

  const assignments = [];

 
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const text = link.innerText?.trim();

    if (!text) return;


    if (link.href.includes("assign")) {
      assignments.push({
        title: text,
        url: link.href
      });
    }
  });

  if (assignments.length > 0) {
    console.log("Assignments found:", assignments);

    chrome.runtime.sendMessage({
      type: "ASSIGNMENTS_FOUND",
      payload: assignments
    });
  }
})();
