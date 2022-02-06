const charactersService = function($http, env) {

    const CHARACTERS_URL = '/characters';

    return { 

        getCharacters: function (params){    
            return $http({
                method: 'GET',
                url: env.BASE_URL + CHARACTERS_URL,
                params                              
              });    
            
        },

        getCharactersByName: function (params){            
            return $http({
                method: 'GET',
                url: env.BASE_URL + CHARACTERS_URL,
                params                
              });    
            
        },

        getCharacterById: function (characterId){    
            return $http({
                method: 'GET',
                url: env.BASE_URL + CHARACTERS_URL + '/' + characterId,
                
              });    
            
        },
       
        
    }   

}