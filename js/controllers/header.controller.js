


const headerController = function($scope, $timeout, $location, userService) {
    
    $scope.userName = "";

    $scope.init = function(){
        const user = userService.getUserSession();
        $scope.userName = user ? user.name : '';
    }    
    
    $scope.logout = function() {
        $scope.userName = "";     
        userService.logout();           
        $location.path("/login");       
    }
}

