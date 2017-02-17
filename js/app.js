var apiKey = require('./../.env').apiKey;

function gitSearch(){
};

gitSearch.prototype.hello = function(){
  console.log("hello");
}

gitSearch.prototype.getUserRepos = function(){
    var response = {};
    $.get('https://api.github.com/users/'+$('#inputUser').val()+'?access_token=' + apiKey).then(function(response){
    return response;


    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.gitsearchmodule = gitSearch;
