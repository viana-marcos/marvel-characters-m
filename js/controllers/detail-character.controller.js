


const detailCharacterController = function($scope, $routeParams, charactersService) {
    
   
    $scope.character = {}
    $scope.loading = false;

    $scope.init = function () {        
        const onSuccess = function (response) {
            const character = response.data.results.length > 0 ? response.data.results[0] : null;
            $scope.character = character;
            $scope.loading = false;          
        };

        $scope.loading = true;
        charactersService.getCharacterById($routeParams.characterId).success(onSuccess);
    };

    $scope.getImageUrl = function () { 
        return $scope.character.thumbnail ? $scope.character.thumbnail.path + '/' + 'landscape_small' + '.' + $scope.character.thumbnail.extension : '';
    };    
        
}

