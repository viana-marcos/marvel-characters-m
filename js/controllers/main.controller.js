


const mainController = function($scope, $timeout, $location, userService) {
    
    $scope.userName = "";
    $scope.loading = false;

    $scope.initHeader = function(){
        const user = userService.getUserSession();
        $scope.userName = user ? user.name : '';
    }

    $scope.init = function() {
        
        const user = userService.getUserSession();
        if(user == null){
            $location.path("/login");
        }else{            
            $location.path("/characters");
        }       
               
    } 
    
    $scope.logout = function() {
        $scope.userName = "";     
        userService.logout();           
        $location.path("/login");       
    }
}