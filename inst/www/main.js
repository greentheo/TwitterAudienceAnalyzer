// a set of js functions that run the picture prediction app
twitterObj = Backbone.Model.extend({
  defaults:{
   cb: null
  },
  initialize: function(){
    
    this.on("change:cb", function(){
      //push the authentication tokens to the cookie 
      
    });
  
  },
  setUser: function(user){
    this.set({user: user});
  }
 
});


var twitter;


$(document).ready(function() {
  
  twitter = new twitterObj();
 
  //create a new unique identifier cookie if no cookie exists yet 
  if($.isEmptyObject($.cookie())){
    rUID = new Array(16+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, 16)
    $.cookie('UID', rUID, {expires: 365});
    
    //set some geovariables
    /*$.cookie('lat', geoplugin_latitude(), {expires: 365});
    $.cookie('long', geoplugin_longitude(), {expires: 365});
    $.cookie('city', geoplugin_city(), {expires: 365});
    $.cookie('region', geoplugin_region(), {expires: 365});
    $.cookie('country', geoplugin_countryCode(), {expires: 365});*/
    twitter.setUser($.cookie());
  }else{
    twitter.setUser($.cookie());
  }
  
  //if the user cookie has no authentication token set it
  if(typeof $.cookie('TwitterAuth')=="undefined"){
    //get the authentication required
    
    //set the TwitterAuth fields in the cookie... set the user cookie in the backbone object
    twitter.setUser($.cookie());
  }else{
    //get the tokens from the cookie
   
  }
 
  
 
});


saferStringify = function(obj, replacer, space) {
    return JSON.stringify(obj, replacer, space).replace(new RegExp('/', 'g'), '||')
    // Escape u2028 and u2029
    // http://timelessrepo.com/json-isnt-a-javascript-subset
    // https://github.com/mapbox/tilestream-pro/issues/1638
    .replace("\u2028", "\\u2028").replace("\u2029", "\\u2029");
};