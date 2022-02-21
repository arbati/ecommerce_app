(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'menuService','CategoriesService'];

  function HeaderController($scope, $state, Authentication, menuService, CategoriesService) {
    var vm = this;

    vm.accountMenu = menuService.getMenu('account').items[0];
    vm.authentication = Authentication;
    vm.isCollapsed = false;
     vm.menu = menuService.getMenu('topbar');

    // vm.menu = tab.items[1];
    // vm.menu =  vm.menu.items.filter(elm => elm.title == 'Admin');

    console.log(vm.menu);

    vm.categories = CategoriesService.query();

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }
  }
}());
