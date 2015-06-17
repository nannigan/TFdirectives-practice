angular.module('vampireKitties',[])
.directive('optIn', function(){
    return{
       restrict: E,
       transclusion:true,
       repalce: true
    };

});


