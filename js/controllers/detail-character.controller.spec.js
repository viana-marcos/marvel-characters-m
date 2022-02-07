describe('detailCharacterController', function () {    

    var controller = null;
    const $scope = {itemsPerPage: 4, currentPage: 0};
    const $routeParams = {characterId: ''};

    const charactersService = {
        getCharacters: (params)=> {},
        getCharacterById: (characterId)=>{},
        getComicsByCharacterId: (characterId, params)=>{},
        logout: ()=> {}
    };

    beforeEach(function () {
        controller = new detailCharacterController($scope, $routeParams, charactersService);       
    });

    it('onCharacterSuccess', function() {           
        
        spyOn(controller, 'getComics');
        controller.onCharacterSuccess({ data: {results: ['Item']}});        
        expect(controller.getComics).toHaveBeenCalled();
    });

    it('init', function() {          
           
        spyOn(charactersService, 'getCharacterById').and.returnValue({success: ()=>{}});        
        $scope.init();
        expect(charactersService.getCharacterById).toHaveBeenCalled();
    });  
    
    
    it('pageChanged', function() {
            
        spyOn(controller, 'getComics');        
        
        $scope.pageChanged();
        
        expect(controller.getComics).toHaveBeenCalled();
    });

    it('getImageUrl', function() {
        
        $scope.character = {
            thumbnail: {
                path: 'http://characters.com',
                extension: 'jpg'
            }
        };           
       
        const result = $scope.getImageUrl({thumbnail: { path: 'http://characters.com', extension: 'jpg' }});
        expect(result).toBe('http://characters.com/landscape_small.jpg');
    });
    

    it('onComicsSuccess', function() {          
           
        $scope.loading = true;       
        controller.onComicsSuccess({ data: {}});        
        expect($scope.loading).toBeFalsy()
    });
    
    it('getComics', function() {          
           
        $scope.titleStartsWith = 'Value';
        spyOn(charactersService, 'getComicsByCharacterId').and.returnValue({success: ()=>{}});
        const characterId = "characterId";
        const params = {};
        controller.getComics(characterId, params);
        
        expect(charactersService.getComicsByCharacterId).toHaveBeenCalled();
    });   

});