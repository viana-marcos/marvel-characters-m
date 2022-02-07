


const loginController = function ($scope, $location, userService) {

    $scope.message = '';
    $scope.user = { email: '', password: '' }

    $scope.login = function () {
        $scope.message = '';       

        const user = userService.findUserByEmail($scope.user.email);

        if (!user) {
            $scope.message = "Email não cadastrado";
            return;
        }

        if (user.password !== $scope.user.password) {
            $scope.message = "Senha inválida";
            return;
        }

        userService.addSession(user);

        $location.path("/characters");

    };

    $scope.register = function () {
        $location.path("/register-user");
    }
    

}

