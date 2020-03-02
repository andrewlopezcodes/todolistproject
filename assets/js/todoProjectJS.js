$("ul").on("click", "li", function(event){
  $(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  //13 is the key number for the "Enter/Return key"
if(event.which === 13){
  var inputEnteredText = $(this).val();
  $(this).val(" ");
  $("ul").append("<li><span>X </span>" + inputEnteredText + "</li>");
}
});