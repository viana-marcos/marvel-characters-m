describe('registerUserController', function () {    

    var controller = null;    

    const $scope = {};

    const $location = { path: ()=>{} };

    const userService = {        
        findUserByEmail: ()=> {},
        save: ()=> {}        
    };

    beforeEach(function () {
        controller = new registerUserController($scope, $location, userService);    
    });

    it('Call method reset', function() {
        
        $scope.user = null;     

        $scope.reset();
        
        expect($scope.user).not.toBeNull();
    });

    describe('register', function () {

        it('Call method with user already registered', function() {
            
            $scope.message = '';
           
            spyOn(userService, 'findUserByEmail').and.returnValue({});            
            $scope.register();
            
            expect($scope.message).toBe('Já existe um usuário com o email informado')
        });

        it('Call method with success', function() {            
            
           
            spyOn(userService, 'findUserByEmail').and.returnValue(null);
            spyOn(userService, 'save');
            spyOn($location, 'path');
            $scope.register();
            
            expect($location.path).toHaveBeenCalled();
        });              

    });

});