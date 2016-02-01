quickie.controller('MainCtrl', ['$http', function($http) {

  var self = this;

  self.currentVideo = [];

  self.sidebarToggle = false;

  self.userSettings = { "gender": "male", "orientation": "hetero"}

  self.updateUserSettings = function(gender, orientation) {
    self.userSettings = { "gender": gender, "orientation": orientation };
  };

  self.toggleSidebar = function() {
    self.sidebarToggle = !self.sidebarToggle;
  };

  self.requestVideo = function() {
    $http({
      method: 'GET',
      url: 'http://backendapi.com',
      params: self.userSettings
    }).then(function successCallback(response) {
      self.currentVideo = response.data.url;
    })
  }

}]);
