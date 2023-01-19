

$(document).ready(function() {
  $("#nav3").addClass("hidden2");
});



$("#nav2").click(function() {
  if ($("#nav3").hasClass("hidden2")) {
          $("#nav3").removeClass("hidden2");
      }else {
          $("#nav3").addClass("hidden2");
  }
          });


// window.addEventListener("click", function(event) {
//   if (!event.target.matches('#nav2')) {
//     $("#nav3").addClass("hidden2");
//   }
// })
