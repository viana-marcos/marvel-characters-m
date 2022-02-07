describe('charactersService', function () {

    var service = null;
    const $http = function(){
        return {};
    };
    const env = { BASE_URL: ''};

    beforeEach(function () {
        service = new charactersService($http, env);
    });

    it('getCharacters', function () {
        
        const params = {};
        const result = service.getCharacters(params);
        expect(result).not.toBeNull();
    });
    
    it('getCharactersByName', function () {
        
        const params = {};
        const result = service.getCharactersByName(params);
        expect(result).not.toBeNull();
    });

    it('getCharacterById', function () {
        
        const characterId = '';
        const result = service.getCharacterById(characterId);
        expect(result).not.toBeNull();
    });

    it('getComicsByCharacterId', function () {
        
        const characterId = '';
        const params = {};
        const result = service.getComicsByCharacterId(characterId, params);
        expect(result).not.toBeNull();
    });

    
});