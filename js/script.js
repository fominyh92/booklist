var BooklistApp = angular.module('app', ['ngRoute', 'app.services']);

BooklistApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/books.html',
      controller: 'BookListCtrl'
    }).
    when('/books', {
      templateUrl: 'views/books.html',
      controller: 'BookListCtrl'
    }).
    when('/create', {
      templateUrl: 'views/create.html',
      controller: 'BookCreateCtrl'
    }).
    when('/books/:bookId', {
      templateUrl: 'views/book.html',
      controller: 'BookCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

BooklistApp.controller("BookListCtrl", ['$scope', 'Books', function($scope, Books){
  Books.getAll().success(function(data) {
    $scope.books = data.results;
    console.log(data.results);
  });
}]);

BooklistApp.controller("BookCtrl", ['$scope', '$routeParams', 'Books', function($scope, $routeParams, Books){
  Books.get( $routeParams.bookId ).success(function(data) {
    $scope.book = data;
    console.log(data);
  });
}]);

BooklistApp.controller("BookCreateCtrl", ['$scope', '$window', 'Books', function($scope, $window, Books){
  var self = this;
  $scope.create = function() {
      Books.create({ name : $scope.book.name, author : $scope.book.author, publish_year : parseInt($scope.book.publish_year, 10) }).success(function(data) {
          // $state.go('todos');
          $window.location.href = '#/books';
      });
  }
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.book);
  }
}]);

// BooklistApp.controller("BookEditCtrl", ['$scope', 'Books', function($scope, Books){
//   Books.getAll().success(function(data){
//     $scope.books = data.results;
//     console.log(data.results);
//   });
// }]);