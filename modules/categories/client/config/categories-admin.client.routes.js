﻿(function () {
  'use strict';

  angular
    .module('categories.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.categories', {
        abstract: true,
        url: '/categories',
        template: '<ui-view/>'
      })
      .state('admin.categories.list', {
        url: '',
        templateUrl: '/modules/categories/client/views/admin/list-categories.client.view.html',
        controller: 'CategoriesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.categories.create', {
        url: '/create',
        templateUrl: '/modules/categories/client/views/admin/form-category.client.view.html',
        controller: 'CategoriesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          categoryResolve: newCategory
        }
      })
      .state('admin.categories.edit', {
        url: '/:categoryId/edit',
        templateUrl: '/modules/categories/client/views/admin/form-category.client.view.html',
        controller: 'CategoriesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ categoryResolve.title }}'
        },
        resolve: {
          categoryResolve: getCategory
        }
      });
  }

  getCategory.$inject = ['$stateParams', 'CategoriesService'];

  function getCategory($stateParams, CategoriesService) {
    return CategoriesService.get({
      categoryId: $stateParams.categoryId
    }).$promise;
  }

  newCategory.$inject = ['CategoriesService'];

  function newCategory(CategoriesService) {
    return new CategoriesService();
  }
}());
