//List of CrossFit movements
  var wodArray = ["<a href=index.html>Home</a>", "<a href=history.html>History</a>", "<a href=clean.html>Clean & Jerk</a>", "<a href=snatch.html>Snatch</a>", "<a href=muscleup.html>Muscle Up</a>", "<a href=hspu.html>HSPU</a>"];
  
//param {wodData} array of wods
  var wodTemplete = function(wodData) {
        var markup = "";
        var i; 

        for(i = 0; i < wodData.length; i++) {//i++ adds one
          markup += "<li>" + wodData[i] + "</li>";
        }
        return markup; 
  };

$(".wod").append(wodTemplete(wodArray));
//end of crossfit movements



//photo album for home page
  var albumArray = ["<img src=images/kferris.jpg>", "<img src=images/klokov.jpg>", "<img src=images/muscleup.png>", "<img src=images/hspu.jpg>"];

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




//table of contents for history page
 var content = ["Glassman", "Affiliates", "CrossFit Games"];

    var contentTemplete = function(content) {
        var markup = "";
        var i; 

        for(i = 0; i < content.length; i++) {//i++ adds one
          markup += "<ul>" + content[i] + "</ul>";
        }
        return markup; 
  };

  $(".contents").append(contentTemplete(content));


//using .each
// var obj = {"Glassman", "Affiliates", "CrossFit Games"};

// $.each(obj, function( i, val ) {
    
// });

//end of table of contents




