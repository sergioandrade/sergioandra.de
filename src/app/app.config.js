(function(){ 
 "use strict"; 
 return angular.module("app.config", [])
.constant("SETTINGS", {"API":"https://api.testing.com/","LOADING_DELAY":0});
 
 })();