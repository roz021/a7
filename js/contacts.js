var friends = [
   {'person' : 'pguo', 'name' : 'Phillip Guo' , 'pic' : 'pguo', 'bio' : 'blah', 'profile' : 'pguo' , 'num' : '10 Mutual Interests'},
   {'person' : 'ed', 'name' : 'Edwin Fu', 'pic' : 'edwin' , 'bio' : 'blah', 'profile' : 'edw' , 'num' : '9 Mutual Interests' },
   {'person' : 'arn', 'name' : 'Arnold S.', 'pic' : 'arnolds', 'bio' : 'blah' , 'profile' : 'arn' , 'num' : '10 Mutual Interests' },
   {'person' : 'ty', 'name' : 'Tyler the Creator', 'pic' : 'TylerTC' , 'bio' : 'blah', 'profile' : 'ttc' , 'num' : '11 Mutual Interests'}
]
var sfriends = [
   {'person' : 'bey', 'name' : 'Beyonce Knowles', 'pic' : 'Beyonce', 'bio' : 'blah', 'profile' : 'bey',
     'num' : '7 Mutual Interests' },
   {'person' : 'frank' ,'name' : 'Frank Ocean', 'pic' : 'FOcean', 'bio' : 'blah', 'profile' : 'fo',
      'num' : '5 Mutual Interests' },
   {'person' : 'klay', 'name' : 'Klay Thompson', 'pic' : 'KThompson' , 'bio' : 'blah', 'profile' : 'kt' ,
     'num' : '3 Mutual Interests'},
]
$(document).ready(function(){
localStorage.setItem('friends', JSON.stringify(friends));
localStorage.setItem('sfriends', JSON.stringify(sfriends));
//FOR THE PREVIEW
var source = $("#profs").html();
var template = Handlebars.compile(source);
var parentDiv = $("#friendsall");

for (var i = 0; i < friends.length; i++){
   var curData = friends[i];
   var curHtml = template(curData);
   parentDiv.append(curHtml);
}

// var sourcesug = $("#profs").html();
// var templatesug = Handlebars.compile(sourcesug);
var parentsugDiv = $("#sfriendsall");

for (var i =0; i < sfriends.length; i++){
 var curData = sfriends[i];
 var curHtml = template(curData);
 parentsugDiv.append(curHtml);
}
//FOR THE MODAL
var sourceprev = $("#prof-prev-curr").html();
var templateprev = Handlebars.compile(sourceprev);
var parentprevDiv = $("#friendsall");

for (var i =0; i < friends.length; i++){
 var curData = friends[i];
 var curHtml = templateprev(curData);
 parentprevDiv.append(curHtml);
}
 var sourcePrevSug = $("#prof-prev-sug").html();
 var templateSugPrev = Handlebars.compile(sourcePrevSug);
 var parentSugDiv = $("#sfriendsall");

for (var i =0; i < sfriends.length; i++){
 var curData = sfriends[i];
 var curHtml = templateSugPrev(curData);
 parentSugDiv.append(curHtml);
}
   });

function remove(obj){
 var curr = JSON.parse(localStorage.getItem('friends'));
 var sugg = JSON.parse(localStorage.getItem('sfriends'));
 for (var i = 0; i < curr.length; i++){
   if (curr[i].name == obj){
     console.log("found " + obj + "at index" + i);
     var temp = curr[i];
     // var tempHtml = template(temp);
     document.getElementById(friendsall).innerHTML = "";
     curr.splice(i, 1);
     sugg.push(temp);
     localStorage.setItem('friends', JSON.stringify(curr));
     localStorage.setItem('sfriends', JSON.stringify(sugg));
     
   }
 }
}

