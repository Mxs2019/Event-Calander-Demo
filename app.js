var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.demos = [{
      name: "Tile View",
      url: "tile-view.html"
    },
    {
      name: "List View",
      url: "list-view.html"
    }, 
    {
      name: "Header Map",
      url: "header-map.html"
    },
    {
      name: "Big Map",
      url: "big-map.html"
    }, 
    {
      name: "List with Images ",
      url: "list-view-images2.html"
    }, 
    {
      name: "List with Images 2",
      url: "list-view-images.html"
    },
    {
      name: "CraftWork Branded",
      url: "http://example-ect-calendar.surge.sh/craftworks/"
    },

    {
      name: "Capital One Example", 
      url: "Cap1.html"

    }, 

    {
      name: "Ben & Jerrys Example", 
      url: "BJ_Example.html"

    }, 
    {
      name: "Corepower Example", 
      url: "CorePower_example.html"
    }

    ]
  }
])
