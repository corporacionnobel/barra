(function(){
    var app = angular.module('appQr',['ui.router','mongolabResourceHttp']);
    app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/',{
                url:"/",
                template:'consolidadoAsistencias {{valor}}',
                //capturando datos desde la url
                controller:function($scope, $location){
                    var path = $location.absUrl();
                    console.log($location.hash());
                    var Codigosqr ="";
                    //buscando el hashtag
                    angular.forEach(path,function(value, key){
                        if(path.substring(key,key+1)==='#'){
                            Codigosqr = path.substring(0,key);
                        }

                    });
                },
                controllerAs:"getUrl"
            });

    })

        })();