var BooklistApp = angular.module('app', ['ngRoute']);

BooklistApp.config(function($routeProvider) {
  $routeProvider.
    when('/books', {
      templateUrl: 'views/books.html',
      controller: 'BookListCtrl'
    }).
    // when('/books/:phoneId/edit', {
    //   templateUrl: 'views/edit.html',
    //   controller: 'BookEditCtrl'
    // }).
    // when('/books/create', {
    //   templateUrl: 'views/create.html',
    //   controller: 'BookCreateCtrl'
    // }).
    otherwise({
      redirectTo: '/'
    });
});

function BookListCtrl($scope) {
  $scope.books = "tyghj";
}