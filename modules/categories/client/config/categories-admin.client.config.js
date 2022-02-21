(function () {
  'use strict';

  // Configuring the categories Admin module
  angular
    .module('categories.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage categories',
      state: 'admin.categories.list'
    });
  }
}());
