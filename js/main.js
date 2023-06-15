$(document).ready(function(){
    $(".submenu-btn").click(function(){
      $(".submenu").toggleClass("show");
    });
});

$(document).on("click", function(event){
  if(!$(event.target).closest(".submenu-btn").length){
      $(".submenu").removeClass("show");
  }
});

$(document).ready(function(){
  $(".hdr-btn").click(function(){
    $(".hdrmenu").toggleClass("show");
  });
});

$(document).on("click", function(event){
if(!$(event.target).closest(".hdr-btn").length){
    $(".hdrmenu").removeClass("show");
}
});
