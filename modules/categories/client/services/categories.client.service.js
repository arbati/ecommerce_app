(function () {
  'use strict';

  angular
    .module('categories.services')
    .factory('CategoriesService', CategoriesService);

  CategoriesService.$inject = ['$resource', '$log'];

  function CategoriesService($resource, $log) {
    var Category = $resource('/api/categories/:categoryId', {
      categoryId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Category.prototype, {
      createOrUpdate: function () {
        var category = this;
        return createOrUpdate(category);
      }
    });

    return Category;

    function createOrUpdate(category) {
      if (category._id) {
        return category.$update(onSuccess, onError);
      } else {
        return category.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(category) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
