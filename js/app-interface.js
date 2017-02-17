var gitSearch = require('./../js/app.js').gitsearchmodule;


$(document).ready(function(){

//test
var currentGitSearch = new gitSearch();
currentGitSearch.hello();


//get info on click of button:
$('#submit').click(function(event){
  event.preventDefault;
  var response = {};
  currentGitSearch.getUserRepos();

  $('ul.info').append('<li>'+$('#inputUser').val()+'</li>');

  console.log(response);

});











});
