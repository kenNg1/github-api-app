var gitSearch = require('./../js/app.js').gitsearchmodule;


$(document).ready(function(){

//test//
var currentGitSearch = new gitSearch();
currentGitSearch.hello();


// console.log(response);

// get info on click of button:
//
$('#submit').click(function(event){
  event.preventDefault;
  $('ul.info').append('<li>'+$('#inputUser').val()+'</li>');
  currentGitSearch.getUserRepos();
});



});
