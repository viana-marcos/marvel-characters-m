

const userService = function() {

    return {

        findUserByEmail: function (email) {
            const users = this.getUsers();            
            const filterdUsers = users.filter(user => user.email === email);           
            return filterdUsers.length > 0 ? filterdUsers[0] : null;
        },

        getUsers: function () {
            const itemUsers = localStorage.getItem('users');        
            return itemUsers ? JSON.parse(itemUsers) : [];
        },
        
        save: function (user) {
            const users = this.getUsers();
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        },

        addSession: function (user) {            
            window.sessionStorage.setItem('user', JSON.stringify(user));            
        },

        getUserSession: function () {            
            const itemUser = window.sessionStorage.getItem('user');
            
            return itemUser ? JSON.parse(itemUser) : null;
        },

       logout: function () {            
            window.sessionStorage.clear();            
        }
    }
   

}