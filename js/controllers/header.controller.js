


const headerController = function($scope, $location, userService) {
    
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

    $scope.redirectToCharacters = function() {
        $location.path("/characters");
    }
}

