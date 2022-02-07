
const detailCharacterController = function($scope, $routeParams, charactersService) {
   
    $scope.titleStartsWith = '';
    $scope.character = {}
    $scope.comics = [];
    $scope.loading = false;

    $scope.totalComics = 0;
    $scope.itemsPerPage = 8;
    $scope.currentPage = 1;
    
    const self = this;

    this.onCharacterSuccess = function (response) {            
        const character = response.data.results.length > 0 ? response.data.results[0] : null;
        $scope.character = character;
        $scope.loading = false;
        self.getComics();          
    };

    $scope.init = function () {
        $scope.loading = true;
        charactersService.getCharacterById($routeParams.characterId).success(self.onCharacterSuccess);
    };

    $scope.pageChanged = function(newPage) {        
        $scope.currentPage = newPage;
        self.getComics();
    }; 

    $scope.getImageUrl = function () {        
        return $scope.character.thumbnail ? $scope.character.thumbnail.path + '/' + 'landscape_small' + '.' + $scope.character.thumbnail.extension : '';
    };

    this.onComicsSuccess = function (response) {            
        $scope.comics = response.data.results;
        $scope.totalComics = response.data.total
        $scope.loading = false;          
    }; 

    this.getComics = function(){
        $scope.loading = true;
        
        const params = self.getDefaultParams();
        if($scope.titleStartsWith !== ''){            
            params.titleStartsWith = $scope.titleStartsWith;           
        }
        charactersService.getComicsByCharacterId($routeParams.characterId, params).success(self.onComicsSuccess);
    };
    
    this.getDefaultParams = function () {        
        return { limit: $scope.itemsPerPage, offset: $scope.itemsPerPage * ($scope.currentPage - 1)};
    }
        
}

