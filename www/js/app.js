// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
          controller: 'SearchCtrl'
        }
      }
    })

    .state('app.favorites', {
      url: "/favorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorites.html",
          controller: 'FavoritesCtrl'
        }
      }
    })
    
 .state('app.favitem', {
      url: "/favorites/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorite.html",
          controller: 'FavoriteCtrl'
        }
      }
    })

    .state('app.content', {
      url: "/content/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/content.html",
          controller: 'ContentCtrl'
        }
      }
    })


.state('app.inbox', {
      url: "/inbox",
      views: {
        'menuContent' :{
          templateUrl: "templates/inbox.html",
          controller: 'InboxCtrl'
        }
      }
    })
.state('app.inboxitem', {
      url: "/inbox/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/inboxitem.html",
          controller: 'InboxItemCtrl'
        }
      }
    })
.state('app.quicklinks', {
      url: "/quicklinks",
      views: {
        'menuContent' :{
          templateUrl: "templates/quicklinks.html",
          controller: 'QuicklinksCtrl'
        }
      }
    })
.state('app.savedsearch', {
      url: "/savedsearch",
      views: {
        'menuContent' :{
          templateUrl: "templates/savedsearch.html",
          controller: 'SavedSearchCtrl'
        }
      }
    })
.state('app.contentlist', {
      url: "/contentlist",
      views: {
        'menuContent' :{
          templateUrl: "templates/contentlist.html",
          controller: 'ContentListCtrl'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/favorites');
});

