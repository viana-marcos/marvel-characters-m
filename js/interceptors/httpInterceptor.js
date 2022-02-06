const httpInterceptor = function ($q, env, md5) {
    return {
        request: function(config) {

            const timestamp = new Date().getTime();
            const hash = md5.createHash( timestamp + env.API_PRIVATE_KEY + env.API_PUBLIC_KEY);

            config.headers['Accept'] = '*/*';
            const params = config.params ? config.params : {}
            params['apikey'] = env.API_PUBLIC_KEY;
            params['hash'] = hash;
            params['ts'] = timestamp;
            config.params = params;
            return config;
        },

        responseError: function(error) {
            if (error.status === 401 || error.status === 403) {
                //faz alguma coisa.
            }
            return $q.reject(error);
        },

        getHash: function (timestamp){       
            return md5.createHash( timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
        }
    };
}