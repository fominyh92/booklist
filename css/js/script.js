'use strict';

angular.module('BooklistApp').config(function($stateProvider){
        $stateProvider.state('books',{
           url:'/books',
           controller:'TodoListController',
           templateUrl:'views/books.html'
        }).state('createTodo',{
            url:'/todo/new',
            controller:'TodoCreationController',
            templateUrl:'views/create-todo.html'
        }).state('editTodo',{
            url:'/todo/edit/:id/:content',
            controller:'TodoEditController',
            templateUrl:'views/edit-todo.html'
        });
}); 