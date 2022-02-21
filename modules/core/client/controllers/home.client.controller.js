(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

     HomeController.$inject = ['ArticlesService','CategoriesService'];

  function HomeController(ArticlesService, CategoriesService) {

    var vm = this;
    
    
    vm.articles = ArticlesService.query();
    vm.categories = CategoriesService.query();




  }
}());
