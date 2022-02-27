(function () {
  'use strict';

  angular
    .module('categories')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['$scope', 'categoryResolve', 'ArticlesService', 'CategoriesService', 'Authentication'];

  function CategoriesController($scope, category, ArticlesService, CategoriesService, Authentication) {
    var vm = this;

    vm.category = category;
    vm.articles = ArticlesService.query();
      vm.categories = CategoriesService.query();
    vm.authentication = Authentication;


   // console.log("start");
    ///.forEach(element => console.log(element));
   // console.log(vm.articles);

          // var result = [];
           //  for(var i = 0 ; i < vm.articles.length ; i++){
             //     console.log(vm.articles[i]);
                // if(vm.articles.category == '6206e3cb34e5413a00057490'){
                    /// result.push(vm.articles[i]);
                // }
           // }
          // console.log(result);
             


  ///const result =  vm.articles.filter(elm => elm[0].category._id == '6206e3cb34e5413a00057490');


   //   const filterItems = (arr, query) => {
   //     return arr.filter(el => el.category == query)
    //  }


  //console.log(filterItems(vm.articles,'6206e3cb34e5413a00057490'));

  }
}());
