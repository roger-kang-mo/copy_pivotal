var currentURL = window.location.href;
var storyID = currentURL.substring(currentURL.indexOf("/compare") + 9);
storyID = storyID.substring(storyID.indexOf("/") + 1);
storyID = storyID.substring(0, storyID.indexOf("-"));

var prBody = document.querySelector("#pull_request_body");

if (prBody.value.indexOf("[*Pivotal Story*](https://www.pivotaltracker.com/story/show/)") != -1) {
  var newPivotalLink = "[*Pivotal Story*](https://www.pivotaltracker.com/story/show/" + storyID + ")";
  var newPrBody = prBody.value.replace("[*Pivotal Story*](https://www.pivotaltracker.com/story/show/)", newPivotalLink);

  prBody.value = newPrBody;
}
