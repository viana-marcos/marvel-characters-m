
var app = angular.module('app', [
'ngRoute',
'angular-md5',
'angularUtils.directives.dirPagination'
]);

app.constant('env', {  
    BASE_URL: 'https://gateway.marvel.com/v1/public',
    API_PUBLIC_KEY: '7ee0157b88bf89033e85e4b870bd94c4',
    API_PRIVATE_KEY: 'b73552d9ae5592ac4844345295dedf909c72d65a',
    enableDebug: true
});

// Intercepitadores
app.factory('HttpInterceptor', ['$q', 'env', 'md5', httpInterceptor]);

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('templates/dirPagination.html');
});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');    
}]);


// Serviços
app.service('userService', [userService]);
app.service('charactersService', ['$http', 'env', charactersService]);

// Controles
app.controller('HeaderController', ['$scope', '$timeout','$location', 'userService', headerController]);
app.controller('MainController', ['$scope', '$timeout','$location', 'userService', mainController]);
app.controller('LoginController', ['$scope', '$location', 'userService', loginController]);
app.controller('RegisterUserController', ['$scope', '$location', 'userService', registerUserController]);
app.controller('CharactersController', ['$scope', '$location', 'charactersService', charactersController]);
app.controller('DetailCharacterController', ['$scope', '$routeParams', 'charactersService', detailCharacterController]);

// Rotas
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "templates/main.html", controller: "MainController"})
        .when("/login", {templateUrl: "templates/login.html", controller: "LoginController"})
        .when("/register-user", {templateUrl: "templates/register-user.html", controller: "RegisterUserController"})
        .when("/characters", {templateUrl: "templates/characters.html", controller: "CharactersController"})
        .when("/detail-character/:characterId", {templateUrl: "templates/detail-character.html", controller: "DetailCharacterController"});     
       
}]);