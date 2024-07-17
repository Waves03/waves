
$(document).ready(function() {
  $('#mission-title').click(function() {
      $('#vision-content').slideUp();
      $('#mission-content').slideDown();
  });

  $('#vision-title').click(function() {
      $('#mission-content').slideUp();
      $('#vision-content').slideDown();
  });
});


function scrollToActivity() {
  const activity = document.querySelectorAll("#title")[index];
  if (activity) {
    activity.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}















// SOOOOOOOOO NICE 





