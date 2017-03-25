var gitSearch = require('./../js/app.js').gitsearchmodule;


$(document).ready(function(){

//test//
var currentGitSearch = new gitSearch();
// currentGitSearch.hello();

$('#submit').click(function(event){
  event.preventDefault();
  // creates a variable called input set to the val of input user box.
  var input = $('#inputUser').val();
  //creates a variable and set it to a method
  // stage [2], pass new var input into the below method
  var pullInfo = currentGitSearch.getUserRepos(input);
  //set the promise (a.k.a then) and set another function with any parameter name.
  pullInfo.then(
    function(finalobject){
      // if (finalobject.message="Not Found"){
      // $('div.info').append("This user could not be found");
      // }
      // else
      console.log(finalobject);
      $('div.info').empty();
      $('div.info').append("<img id='profilepic' src="+finalobject.avatar_url+"></img>");
      $('div.info').append('<p id="gitname">'+finalobject.name+'</p>');
      $('div.info').append('<p id="gituser">'+finalobject.login+'</p>');
      if (finalobject.company != null) {$('div.info').append('<p>'+finalobject.company+'</p>');}
      $('div.info').append(`<p>${finalobject.location}</p>`);
      if (finalobject.email != null) {$('div.info').append('<p>'+finalobject.email+'</p>');}
      if (finalobject.blog != null) {$('div.info').append('<p>'+finalobject.blog+'</p>');}
      $('div.info').append(`<p>Joined on ${moment(finalobject.created_at).format('LL')}</p>`);
    }
    );

  var lowlevel = currentGitSearch.getRepos(input);
  lowlevel.then(function(finalobject){
    console.log(finalobject.length);
    $('ul.projects').empty();
    for(i=0;i<finalobject.length;i++){
      $('ul.projects').append('<li>'+finalobject[i].git_url+'</li>');
    }
  });




});

});
