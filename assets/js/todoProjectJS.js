// video background
var video = document.getElementById("myVideo");


//Todo List
var close = document.getElementsByClassName("close");
var open = document.getElementsByClassName("open");
var input = document.getElementsByTagName("input");
var imputDisplay = "display: none";


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
  $("ul").append("<li><span><img src='assets/rubbish.png'></span>" + inputEnteredText + "</li>");
}
});

$(".pencilIcon").click(function(event){
  $("input[type='text']").fadeToggle();
  if(document.querySelector("style") === "display: none;"){
    $("span #open").toggleClass(".open");
  }
  event.stopPropagation();
});

// Clock 

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

// This code was written by github: @andrewlopezcodes