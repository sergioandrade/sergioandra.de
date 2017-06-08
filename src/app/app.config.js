(function(){ 
 "use strict"; 
 return angular.module("app.config", [])
.constant("SETTINGS", {"API":"http://localhost/","LOADING_DELAY":0});
 
 })();