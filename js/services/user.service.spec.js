describe('User Service', function () {

    var service = null;

    beforeEach(function () {
        service = new userService();
    });

    it('getTeste', function () {       

        const result = service.getTeste();
        expect(result).toBe('Valor');
    });

    it('findUserByEmail', function () {
       
        service.getUsers= function () {                
            return [{ email: 'user@user.com' }];
        };
        
        const email = 'user@user.com';

        const result = service.findUserByEmail(email);
        expect(result).not.toBeNull();
    });

    it('getUsers', function () {

        const users = [{ email: 'user@user.com' }];      
        
        window.localStorage.getItem = function () {                
            return JSON.stringify(users);
        };      

        const result = service.getUsers();
        expect(result).toEqual(users);
    });

    it('save', function () {

        service.getUsers= function () {                
            return [];
        };

        const user  = { email: 'user@user.com' };       
        
        spyOn(localStorage, 'setItem');

        service.save(user);
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('addSession', function () {
       
        const user  = { email: 'user@user.com' };       
        
        spyOn(window.sessionStorage, 'setItem');

        service.addSession(user);
        expect(window.sessionStorage.setItem).toHaveBeenCalled();
    });

    describe('getUserSession', function () {

        it('getUserSession user is not null', function () {

            const user = { email: 'user@user.com' };      
            
            window.sessionStorage.getItem = function () {
                return JSON.stringify(user);
            };      
    
            const result = service.getUserSession();
            expect(result).not.toBeNull();
        });

        it('getUserSession user is null', function () {            
            
            window.sessionStorage.getItem = function () {                
                return null;
            };      
    
            const result = service.getUserSession();
            expect(result).toBeNull();
        });

    });

    it('logout', function () {      
      
        
        spyOn(window.sessionStorage, 'clear');

        service.logout();
        expect(window.sessionStorage.clear).toHaveBeenCalled();
    });


    
});