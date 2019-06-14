function copyPivotalStoryIDToPR() {
  var waitCount = 0;

  var prBodyPresentInterval = setInterval(function () {
    var prBody = document.querySelector("#pull_request_body");
    waitCount++;

    if (prBody) {
      clearInterval(prBodyPresentInterval);

      var currentURL = window.location.href;
      console.log(currentURL);
      var storyID = currentURL.substring(currentURL.indexOf("/compare") + 9);
      storyID = storyID.substring(storyID.indexOf("/") + 1);
      storyID = storyID.substring(0, storyID.indexOf("-"));
      console.log(storyID);

      var prBody = document.querySelector("#pull_request_body");

      console.log(prBody);

      if (prBody.value.indexOf("[*Pivotal Story*](https://www.pivotaltracker.com/story/show/)") != -1) {
        var newPivotalLink = "[*Pivotal Story*](https://www.pivotaltracker.com/story/show/" + storyID + ")";
        var newPrBody = prBody.value.replace("[*Pivotal Story*](https://www.pivotaltracker.com/story/show/)", newPivotalLink);

        prBody.value = newPrBody;
      }
    } else if (waitCount > 20) {
      clearInterval(prBodyPresentInterval);
    }
  }, 500);
}

if (window.location.href.indexOf("/compare/") !== -1 && window.location.href.indexOf("...") == -1) {
  window.onload = copyPivotalStoryIDToPR();
} else if (window.location.href.indexOf("/tree/" !== -1) {
  window.onload = function () {
    var prButton = document.querySelector(".new-pull-request-btn");
    if (prButton) {
      prButton.addEventListener("click", function () {
        copyPivotalStoryIDToPR();
      });
    }
  }
}
