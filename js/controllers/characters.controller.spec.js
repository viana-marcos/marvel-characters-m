describe('charactersController', function () {

    

    var controller = null;
    const $scope = {itemsPerPage: 4, currentPage: 0};
    const $location = {path: ()=>{}};

    const charactersService = {
        getCharacters: (params)=> {},
        logout: ()=> {}
    };

    beforeEach(function () {
        controller = new charactersController($scope, $location, charactersService);       
    });

    it('onSuccess', function() {          
           
        $scope.loading = true;       
        controller.onSuccess({ data: {}});        
        expect($scope.loading).toBeFalsy()
    });

    it('getCharacters', function() {          
           
        $scope.nameStartsWith = 'Value';
        spyOn(charactersService, 'getCharacters').and.returnValue({success: ()=>{}});
        controller.getCharacters();
        
        expect(charactersService.getCharacters).toHaveBeenCalled();
    });
    
    it('pageChanged', function() {
            
        spyOn(controller, 'getCharacters');        
        
        $scope.pageChanged();
        
        expect(controller.getCharacters).toHaveBeenCalled();
    });
    
    it('init', function() {          
           
        spyOn(controller, 'getCharacters');
        $scope.init();
        expect(controller.getCharacters).toHaveBeenCalled();
    });

    it('filterCharacters', function() {          
           
        spyOn(controller, 'getCharacters');
        $scope.filterCharacters();
        expect(controller.getCharacters).toHaveBeenCalled();
    });

    it('getImageUrl', function() {          
        
        const result = $scope.getImageUrl({thumbnail: { path: 'http://characters.com', extension: 'jpg' }});
        expect(result).toBe('http://characters.com/portrait_uncanny.jpg');
    });

    it('viewDetail', function() {          
           
        spyOn($location, 'path');
        $scope.viewDetail('characterId');
        expect($location.path).toHaveBeenCalled();
    });
    

});