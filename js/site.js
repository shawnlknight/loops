//List of CrossFit movements
  var wodArray = ["<a href=index.html>Home</a>", "<a href=clean.html>Clean & Jerk</a>", "<a href=snatch.html>Snatch</a>", "<a href=muscleup.html>Muscle Up</a>", "<a href=burpee.html>Burpee</a>"];
  
//param {wodData} array of wods
  var wodTemplete = function(wodData) {
        var markup = "";
        var i; 

        for(i = 0; i < wodData.length; i++) {//i++ adds one
          markup += "<li>" + wodData[i] + "</li>";

        }

        return markup; 

  };

  wodTemplete(wodArray);
$(".wod").append(wodTemplete(wodArray));