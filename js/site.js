//List of CrossFit movements
var wodArray = ["<a href=index.html><li>Home</li></a>", "<a href=history.html><li>History</li></a>", 
                "<a href=clean.html><li>Clean & Jerk</li></a>", "<a href=snatch.html><li>Snatch</li></a>", 
                "<a href=muscleup.html><li>Muscle Up</li></a>", "<a href=hspu.html><li>HSPU</li></a>"];
  
//param {wodData} array of wods
var wodTemplete = function(wodData) {
  var markup = "";
  var i; 

  for(i = 0; i < wodData.length; i++) {//i++ adds one
    markup += wodData[i];
  }
  return markup; 
};

$(".wod").append(wodTemplete(wodArray));
//end of crossfit movements



//photo album for home page
var albumArray = ["<img src=images/kferris.jpg>", "<img src=images/klokov.jpg>", 
                  "<img src=images/muscleup.png>", "<img src=images/hspu.jpg>"];

var albumTemplete = function(albumData) {
  var markup = "";
  var i; 

  for(i = 0; i < albumData.length; i++) {//i++ adds one
    markup += "<div>" + albumData[i] + "</div>";
  }
  return markup; 
};

$(".album").append(albumTemplete(albumArray));

//To Show and Hide pictures
$(".album img").click(function(event) {
  event.preventDefault();

  $(this).closest("div").siblings().toggle();
  $(this).toggleClass("magnify");
});
//end of photo album




//Table of contents using jQuery.each() 
$(document).ready(function() {

  var contents = [
    {
      section: "Glassman"
    },
    {
      section: "Affiliates"
    },
    {
      section: "Crossfit Games"
    }
  ];

  var markup = "";

    $.each(contents, function(key, value) {

      markup += "<ul>" + contents[key].section + "</ul>";

    }); 

  $(".contents").append(markup);

});




