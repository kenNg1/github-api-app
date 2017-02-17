var apiKey = require('./../.env').apiKey;

function gitSearch(){};

gitSearch.prototype.hello = function(){
  console.log("hello there");
}

  gitSearch.prototype.getUserRepos = function(){
    $.get('https://api.github.com/users/kenNg1?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

//https://api.github.com/users/kenNg1?access_token=e2d14a028d4e064a1ca04c8d1fb4ff2e4c8a3676

exports.gitsearchmodule = gitSearch;
