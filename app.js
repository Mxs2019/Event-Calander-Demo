var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.demos = [{
      name: "Header Map",
      url: "header-map.html"
    },{
      name: "Big Map",
      url: "big-map.html"
    }
    ]
  }
])
