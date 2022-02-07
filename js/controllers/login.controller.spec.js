describe('loginController', function () {    

    var controller = null;    

    const $scope = {};

    const $location = { path: ()=>{} };

    const userService = {        
        findUserByEmail: ()=> {},
        addSession: ()=> {}        
    };

    beforeEach(function () {
        controller = new loginController($scope, $location, userService);    
    });

    describe('login', function () {

        it('Call method with email not registered', function() {
            
            $scope.message = '';
           
            spyOn(userService, 'findUserByEmail').and.returnValue(null);
            $scope.login();
            
            expect($scope.message).toBe('Email não cadastrado')
        });

        it('Call method with invalid password', function() {
            
            $scope.message = '';
            $scope.user = { password: "321"};
           
            spyOn(userService, 'findUserByEmail').and.returnValue({ password: '123'});
            $scope.login();
            
            expect($scope.message).toBe("Senha inválida")
        });

        it('Call method with valid user', function() {
            
            $scope.message = '';           
            $scope.user = {password: '123'};
           
            spyOn(userService, 'findUserByEmail').and.returnValue({ password: '123'});
            spyOn(userService, 'addSession');
            spyOn($location, 'path');

            $scope.login();
            
            expect($location.path).toHaveBeenCalled();
        });        

    });

    it('Call method register', function() {      
        
        spyOn($location, 'path');

        $scope.register();
        
        expect($location.path).toHaveBeenCalled();
    });

   
});