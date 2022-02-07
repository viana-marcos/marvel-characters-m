


const registerUserController = function ($scope, $location, userService) {

    $scope.message = '';
    $scope.user = { name: '', email: '', password: '' };
    
    $scope.reset = function () {
        $scope.user = { name: '', email: '', password: '', confirmationPassword: '' };
    };

    $scope.register = function () {
        $scope.message = '';
        const user = userService.findUserByEmail($scope.user.email);
        if (user) {
            $scope.message = 'Já existe um usuário com o email informado';
            return;
        }

        userService.save($scope.user);              
        $location.path("/login");
    };


}