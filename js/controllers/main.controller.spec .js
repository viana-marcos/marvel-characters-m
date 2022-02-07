describe('mainController', function () {

    

    var controller = null;
    const $scope = {};
    const $location = {path: ()=>{}};

    const userService = {
        getUserSession: ()=> {},
        logout: ()=> {}
    };

    beforeEach(function () {
        controller = new mainController($scope, $location, userService);
    });    

    describe('init', function () {

        it('init with user is null', function() {          
           
            spyOn(userService, 'getUserSession').and.returnValue(null);
            spyOn($location, 'path');
            $scope.init();
            
            expect($location.path).toHaveBeenCalled();
        });

        it('init with user is not null', function() {
            
            spyOn(userService, 'getUserSession').and.returnValue({name: 'Victor'});
            spyOn($location, 'path');
            
            $scope.init();
            
            expect($location.path).toHaveBeenCalled();
        });

    });

    it('logout', function() {
            
        spyOn(userService, 'logout');
        spyOn($location, 'path');
        
        $scope.logout();
        
        expect($location.path).toHaveBeenCalled();
    });
    

});