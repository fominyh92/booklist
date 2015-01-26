angular.module('app.services', []).factory('Books', ['$http', 'PARSE_KEYS', function($http, PARSE_KEYS){
    return {
        getAll: function(){
            return $http.get('https://api.parse.com/1/classes/books', {
                headers: {
                    'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
                    'X-Parse-REST-API-Key': PARSE_KEYS.REST_API_KEY,
                }
            });
        },
        get: function(id){
            return $http.get('https://api.parse.com/1/classes/books/' + id, {
                headers: {
                    'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
                    'X-Parse-REST-API-Key': PARSE_KEYS.REST_API_KEY,
                }
            });
        },
        create: function(data){
            return $http.post('https://api.parse.com/1/classes/books', data, {
                headers: {
                    'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
                    'X-Parse-REST-API-Key': PARSE_KEYS.REST_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
        },
        edit: function(id,data){
            return $http.put('https://api.parse.com/1/classes/books/' + id, data, {
                headers: {
                    'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
                    'X-Parse-REST-API-Key': PARSE_KEYS.REST_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
        },
        delete: function(id){
            return $http.delete('https://api.parse.com/1/classes/books/' + id, {
                headers:{
                    'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
                    'X-Parse-REST-API-Key': PARSE_KEYS.REST_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
        }
    }
}]).value('PARSE_KEYS', {
    APP_ID: 'TSAfvRs7nzGPlKyqjVSeYJoNcdi3bv3SIyvzG6UP',
    REST_API_KEY: '1ZqKymdLBSSlWoPqzabi9x7rw9Vlq8WvUU0NmLc9'
});