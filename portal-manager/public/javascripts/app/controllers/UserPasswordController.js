var app = angular.module('app', [ 'app.directives', 'app.services', 'messages', 'angular-loading-bar', 'ngAnimate' ]);
app.controller('UserPasswordController', function($scope, $http, $rootScope, $timeout, $controller, $messages, AppManager) {

    var manager = new AppManager({
        name : 'user-password',
        focus : function() {
            $("#userPassword").focus();
        },
        hotkeys : function() {
            $("input:not(.hotkey)").bind("keydown.insert", function(evt) {
                $('#newActionButton').trigger("click");
                return false;
            }).addClass("hotkey");
        }
    });

    $(document).ready(function() {
        manager.init();
        $http.get('/user-logged').success(function(data) {
            $rootScope.item = data.item;
            $rootScope.userDetails = {};
            setTimeout(function() {
                $rootScope.focus();
            }, 100);
        });
        $rootScope.form = $scope.mainForm;
        $("#main").removeClass("active");
    });

});