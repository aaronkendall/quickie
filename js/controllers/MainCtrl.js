quickie.controller('MainCtrl', ['$http', '$sce', function($http, $sce) {

  var self = this;

  self.currentVideo = "";

  self.requestVideo = function(gender, rating) {
    const params = '?rating=' + rating;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/' + gender + params,
    }).then(function(response) {
      let videoEmbedCode = "http://www.pornhub.com/embed/" + response.data.video_id;
      self.trustVideo(videoEmbedCode);
    });

  };

  self.trustVideo = function(videoUrl) {
    self.currentVideo = $sce.trustAsResourceUrl(videoUrl);
  };

}]);
