
$("#navbar").on("click", function() {
  $(".nveMenu").addClass("is-opened");
  $(".overlay").addClass("is-on");
});

$(".overlay").on("click", function() {
  $(this).removeClass("is-on");
  $(".nveMenu").removeClass("is-opened");
});