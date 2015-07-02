angular.module('vampireKitties',[])
.directive('optIn', function(){
    return{
       restrict: 'E',
       transclusion: true,
       templateUrl: 'vampire-kitties.html',
       repalce: true
    };

});


