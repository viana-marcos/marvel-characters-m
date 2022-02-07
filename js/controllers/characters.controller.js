const charactersController = function($scope, $location, charactersService) {    
    
    $scope.nameStartsWith = '';
    $scope.characters = [];
    $scope.loading = false;
    
    $scope.totalCharacters = 0;
    $scope.itemsPerPage = 8;
    $scope.currentPage = 1;
    
    const self = this;

    this.getDefaultParams = function () {
        return { limit: $scope.itemsPerPage, offset: $scope.itemsPerPage * ($scope.currentPage - 1)};
    };

    this.onSuccess = function (response) {
        $scope.totalCharacters = response.data.total
        $scope.characters = response.data.results;        
        $scope.loading = false;          
    }; 

    this.getCharacters = function(){
        
        $scope.loading = true;
        const params = self.getDefaultParams();
        if($scope.nameStartsWith !== ''){            
            params.nameStartsWith = $scope.nameStartsWith;           
        }
        charactersService.getCharacters(params).success(self.onSuccess);
    };       

    $scope.pageChanged = function(newPage) {        
        $scope.currentPage = newPage;
        self.getCharacters();
    };    

    $scope.init = function () {
        self.getCharacters();
    };

    $scope.filterCharacters = function(){
        $scope.currentPage = 1;
        self.getCharacters();
    }

    $scope.getImageUrl = function (character) { 
        return character.thumbnail.path + '/' + 'portrait_uncanny' + '.' + character.thumbnail.extension;       
    };

    $scope.viewDetail = function (characterId) { 
        $location.path("/detail-character/" + characterId);
    };  
        
}

