var favs = [
      { id: 1, title: 'To Complete', description: 'Items awaiting completion'},
      { id: 2, title: 'To Develop'  , description:'Future projects due'},
      { id: 3, title: 'To Read', description: 'Items to read'},
      { id: 4, title: 'Shared Favorites for Team', description: 'For the research team'}
];

var favContent = [
  // To Read
  { id: 3, title: 'Daily Overnights - September 18, 2014',date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Daily overnights for multiple demos and networks on Nielsen\'s LIVE+SD data stream.' },
  { id: 3, title: 'Weekly Ratings - Through September 14, 2014',date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Quarter-to-date US ratings by daypart' },
  { id: 3, title: 'comScore - U.S. Mobile App Report - August 2014',date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Last year saw the U.S. become a mult-platform majority, a significant milestone in which the majority of digital consumers used both desktop and mobile devices every month.' }
];

// var favContents=[
//   {id: 1, title: 'Monday overnight report'  ,date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Preliminary overnight ratings for broadcast networks - time period averages from metered markets only. Only the most current Broadcast Preliminary reports are available.'  },
//   {id: 2, title: 'Tuesday overnight report' ,date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Preliminary overnight ratings for broadcast networks - time period averages from metered markets only. Only the most current Broadcast Preliminary reports are available.'   },
//   {id: 3, title: 'Thursday overnight report',date:'9/30/2015', person:'contact@onetouchintelligence.com', abstract: 'Preliminary overnight ratings for broadcast networks - time period averages from metered markets only. Only the most current Broadcast Preliminary reports are available.'  }
// ];

var contents = [
  {id: 1, title: 'Daily Overnights - Sept. 18, 2014'  ,date:'9/18/2014', person:'contact@onetouchintelligence.com', abstract:'Daily overnights for multiple demos and networks on Nielsen\'s LIVE+SD data stream.'  },
  {id: 2, title: 'Daily Overnights - Sept. 17, 2014' ,date:'9/17/2014', person:'contact@onetouchintelligence.com', abstract: 'Daily overnights for multiple demos and networks on Nielsen\'s LIVE+SD data stream.'  },
  {id: 3, title: 'Daily Overnights - Sept. 16, 2014',date:'9/16/2014', person:'contact@onetouchintelligence.com', abstract: 'Daily overnights for multiple demos and networks on Nielsen\'s LIVE+SD data stream.'}
];

var attachments = [
  {name: 'Highlights - Sept 18, 2014.pdf'},
  {name: 'Competitive Grid 9-18.14.xslx'},
  {name: 'Sept 18 2014 Top 10 list.docx'}
];

var messages = [
  {title: 'Now Available: Q2 2014 Corporate Research Presentation', date:'9/24/2015', message:'The Nielsen Q2 2014 Cross-Platform Report highlights the viewing and listening behavior of U.S. consumers and identifies emerging trends in media across traditional TV, mobile, Internet and audio.', read: false },
  {title: 'Q2 2014 Nielsen Cross-Platform Report Has Been Shared With You', date:'9/30/2015', message:'The Nielsen Q2 2014 Cross-Platform Report highlights the viewing and listening behavior of U.S. consumers and identifies emerging trends in media across traditional TV, mobile, Internet and audio.', read: true },
  {title: 'A Favorites Folder Has Been Shared With You', date:'10/02/2015', message:'The Nielsen Q2 2014 Cross-Platform Report highlights the viewing and listening behavior of U.S. consumers and identifies emerging trends in media across traditional TV, mobile, Internet and audio.', read: false }
];

var quicklinks = [
  {url: 'img/bars.png', title: 'Overnights Database'},
  {url: 'img/users.png', title: 'Universe Estimates'},
  {url: 'img/signup.png', title: 'Approved Sources'},
  {url: 'img/untitled.png', title: 'International Research'},
];

var searches =  [
  { title: 'Daily Overnights', id: 1 , description: 'All Nielsen overnights'},
  { title: 'Ad Sales Reports', id: 3  , description:'Client-specific ad sales reports'},
  { title: 'Syndicated Mobile Reports', id: 2 , description: '3rd party reports about mobile'}
];








angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout) {


  
})
.controller('FavoritesCtrl', function($rootScope, $scope, $ionicModal, $timeout, $stateParams) {
 // Form data for the login modal
  $scope.loginData = {};
// Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $rootScope.loggedIn = true;
    $scope.favorites = favs;
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 250);
  };

    if(!$rootScope.loggedIn){
      
      $scope.$watch('modal', function(){
        if($scope.modal){
          $scope.login();
        }
      });

    }else{
      $scope.favorites = favs;
    }

})
.controller('FavoriteCtrl', function($scope, $stateParams) {
   
    $scope.f = favs[0];

    $scope.contents = favContent;
})
.controller('ContentCtrl', function($scope, $stateParams) {
    //$scope.c = contents[0];
    $scope.c = favContent[0];
    $scope.files = attachments;
})
.controller('InboxCtrl', function($scope, $stateParams) {
    $scope.messages = messages;
})
.controller('InboxItemCtrl', function($scope, $stateParams) {
    $scope.m = messages[0];
})
.controller('QuicklinksCtrl', function($scope, $stateParams) {
    $scope.links = quicklinks;
})
.controller('SavedSearchCtrl', function($scope, $stateParams) {
    $scope.searches = searches;
})
.controller('ContentListCtrl', function($scope, $stateParams) {
    $scope.contents = contents;
})
.controller('SearchCtrl', function($rootScope, $scope, $stateParams) {
  $scope.crit  =  $rootScope.crit || {ss: ''};
  
  if($rootScope.contents){
    $scope.contents = $rootScope.contents;
  }
    
  $scope.search = function(){
      if(!$scope.crit.ss){
        $rootScope.contents = [];
      }else{
      $rootScope.contents = contents;
    }
  };


    $scope.$watch('crit.ss', function(){
      $rootScope.crit = $scope.crit;
    });
})

;
