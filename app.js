var app = angular.module('myApp', []);
var dood = ['hi',2,3]
app.controller('myController', function(){
  this.blah = dood;
});