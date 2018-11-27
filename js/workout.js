$(document).ready(function(){
var complexData = [
  {'dayindex': 'Abs'},
  {'dayindex': 'Back'},
  {'dayindex': 'Bicep'},
  {'dayindex': 'Calf'},
  {'dayindex': 'Cardio'},
  {'dayindex': 'Chest'},
  {'dayindex': 'Forearm'},
  {'dayindex': 'Glute'},
  {'dayindex': 'Shoulder'},
  {'dayindex': 'Thigh'},
  {'dayindex': 'Tricep'},
  {'dayindex': 'All'}
]
var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var parentDiv = $("#calen");

for (var i = 0; i<complexData.length; i++) {
  var curData = complexData[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}

});
