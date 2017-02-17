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
  pullInfo.then(function(finalobject){
    console.log(finalobject);
    $('ul.info').empty();
    $('ul.info').append("<img id='profilepic' src="+finalobject.avatar_url+"></img>");
    $('ul.info').append("<li class='headers'>Name</li>");
    $('ul.info').append('<li>'+finalobject.name+'</li>');
    $('ul.info').append("<li class='headers'>User Name</li>");
    $('ul.info').append('<li>'+finalobject.login+'</li>');
  });

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
