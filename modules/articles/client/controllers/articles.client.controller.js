(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$scope', 'articleResolve', 'ArticlesService','CategoriesService', 'Authentication'];

  function ArticlesController($scope, article , ArticlesService, CategoriesService, Authentication) {
    var vm = this;

    vm.article = article;
    vm.articles = ArticlesService.query();
    vm.categories = CategoriesService.query();
    vm.authentication = Authentication;

  }
}());
