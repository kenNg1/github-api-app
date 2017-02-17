// if i wanted to hide my API I would do this
// var apiKey = require('./../.env').apiKey;

var apiKey = 'e2d14a028d4e064a1ca04c8d1fb4ff2e4c8a3676';

//function gitSearch(){};
// replace above with the below..
gitSearch = function(){};

gitSearch.prototype.hello = function(){
  console.log("hello there");
};

// creates an object and returns it to stage [2]
  gitSearch.prototype.getUserRepos = function(username){
    return $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey);
  };

  gitSearch.prototype.getRepos =
  function(username){
    return $.get('https://api.github.com/users/'+username+'/repos');
  };


exports.gitsearchmodule = gitSearch;
