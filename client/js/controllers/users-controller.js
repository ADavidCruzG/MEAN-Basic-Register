/**
 * Created by David Cruz on 07/06/2017.
 */
'use strict';

angular.module('users')
    .controller('UserController', function ($scope, $rootScope, UserService, $state, toaster) {

        $scope.start = function () {
            $scope.user = {};
        };

        $scope.createUser = function () {
            var userToCreate = $scope.user;
            
            UserService.getUserByEmail(userToCreate.email)
                .then(function (res) {
                    if (typeof res.data === 'undefined' || res.data === null) {
                        UserService.createUser(userToCreate)
                            .then(function () {
                                toaster.pop({
                                    type: 'success',
                                    title: 'Proceso exitoso',
                                    body: 'El usuario se creó exitosamente',
                                    timeout: 4000,
                                    showCloseButton: true
                                });
                                $state.go('home');
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    } else {
                        toaster.pop({
                            type: 'warning',
                            title: 'AVISO',
                            body: 'Ya existe un usuario con el correo ' + userToCreate.email,
                            timeout: 4000,
                            showCloseButton: true
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        $scope.start();


        if ($state.current.name === 'app.users') {

        } else if ($state.current.name === 'app.users_create') {
            $rootScope.Title = 'Crear Usuario';
            $scope.saveData = function (userToCreate) {
                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {

                }
            };
        }
    });