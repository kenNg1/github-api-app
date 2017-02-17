var apiKey = require('./../.env').apiKey;

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
