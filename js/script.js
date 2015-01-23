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

BooklistApp.controller("BookCtrl", ['$scope', '$routeParams', '$window', 'Books', function($scope, $routeParams, $window, Books){
  Books.get( $routeParams.bookId ).success(function(data) {
    $scope.book = data;
    console.log(data);
  });

  $scope.save = function(){
    Books.edit( $routeParams.bookId, $scope.book ).success(function(data) {
      $scope.book = data;
      console.log('book saveed');
      $window.location.href = '#/books';
    });
  }

  $scope.delete = function(){
    Books.delete( $routeParams.bookId ).success(function(data) {
      $scope.book = data;
      console.log('book deleteed');
      $window.location.href = '#/books';
    });
  }
}]);

BooklistApp.controller("BookCreateCtrl", ['$scope', '$window', 'Books', function($scope, $window, Books){
  $scope.create = function() {
      Books.create({ name : $scope.book.name, author : $scope.book.author, publish_year : parseInt($scope.book.publish_year, 10) }).success(function(data) {
          console.log('book created');
          $window.location.href = '#/books';
      });
  }
}]);