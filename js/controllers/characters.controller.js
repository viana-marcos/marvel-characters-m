const list = [
    {
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400"        
        
    },
    {
        "id": 1017100,
        "name": "A-Bomb (HAS)",
        "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        "modified": "2013-09-18T15:54:04-0400"        
        
    },
    {
        "id": 1009144,
        "name": "A.I.M.",
        "description": "AIM is a terrorist organization bent on destroying the world.",
        "modified": "2013-10-17T14:41:30-0400"               
    },
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    },
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    },
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    }
    ,
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    }
    ,
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    }
    ,
    {
        "id": 1010699,
        "name": "Aaron Stack",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500"               
    }
]

const charactersController = function($scope, $location, charactersService) {
    
    
    $scope.nameStartsWith = '';
    $scope.characters = [];
    $scope.loading = false;
    
    $scope.totalCharacters = 0;
    $scope.itemsPerPage = 8;
    $scope.currentPage = 1;    

    $scope.pageChanged = function(newPage) {        
        $scope.currentPage = newPage;
        getCharacters();

    };      

    const getCharacters = function(){
        //$scope.characters = list;
        $scope.loading = true;
        const params = getDefaultParams();
        if($scope.nameStartsWith !== ''){            
            params.nameStartsWith = $scope.nameStartsWith;           
        }
        charactersService.getCharacters(params).success(onSuccess);
    };

    $scope.init = function () {
        getCharacters();
    };

    $scope.filterCharacters = function(){
        $scope.currentPage = 1;
        getCharacters();
    }

    $scope.getImageUrl = function (character) { 
        return character.thumbnail.path + '/' + 'portrait_uncanny' + '.' + character.thumbnail.extension;
        //return "https://www.hypeness.com.br/1/2018/12/imagens-surreais7.jpg";
    };

    $scope.viewDetail = function (characterId) { 
        $location.path("/detail-character/" + characterId);
    };
    
    const getDefaultParams = function () {
        return { limit: $scope.itemsPerPage, offset: $scope.itemsPerPage * ($scope.currentPage - 1)};
    };

    const onSuccess = function (response) {
        $scope.totalCharacters = response.data.total
        $scope.characters = response.data.results;        
        $scope.loading = false;          
    }; 
        
}

