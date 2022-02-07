describe('headerController', function () {

    

    var controller = null;
    const $scope = {};
    const $location = {path: ()=>{}};

    const userService = {
        getUserSession: ()=> {},
        logout: ()=> {}
    };

    beforeEach(function () {
        controller = new headerController($scope, $location, userService);
    });   

    describe('init', function () {

        it('init with user is void', function() {          
           
            spyOn(userService, 'getUserSession').and.returnValue(null);
            $scope.init();
            
            expect($scope.userName).toBe('')
        });

        it('init with user is not void', function() {
            
            spyOn(userService, 'getUserSession').and.returnValue({name: 'Victor'});
            
            $scope.init();
            
            expect($scope.userName).toBe('Victor')
        });

    });

    it('logout', function() {
            
        spyOn(userService, 'logout');
        spyOn($location, 'path');
        
        $scope.logout();
        
        expect($location.path).toHaveBeenCalled();
    });

    it('redirectToCharacters', function() {            
        
        spyOn($location, 'path');
        
        $scope.redirectToCharacters();
        
        expect($location.path).toHaveBeenCalled();
    });

});