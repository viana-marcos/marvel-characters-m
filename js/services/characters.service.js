const charactersService = function($http, env) {

    const CHARACTERS_URL = '/characters';
    const COMICS_URL = '/comics';

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

        getComicsByCharacterId: function (characterId, params){    
            return $http({
                method: 'GET',
                url: env.BASE_URL + CHARACTERS_URL + '/' + characterId + '/' + COMICS_URL,
                params                
              });    
            
        }       
        
    }   

}