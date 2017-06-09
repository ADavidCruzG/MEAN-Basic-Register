/**
 * Created by David Cruz on 07/06/2017.
 */
'use strict';

angular.module('users')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/views/welcome-view.html'
        }).state('users_create', {
            url: '/users/register',
            templateUrl: '/views/users-create-view.html',
            controller: 'UserController'
        });
    })
    .constant('globalConfig', {
        apiAddress: 'http://localhost:3000/api'
    });