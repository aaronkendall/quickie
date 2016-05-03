quickie.controller('MainCtrl', ['$http', '$sce', function($http, $sce) {

  var self = this;

  self.preference = '';
  self.currentVideoId = '';
  self.currentVideo = '';

  self.requestVideo = function(gender) {
    self.preference = gender;
    $http({
      method: 'GET',
      url: 'https://glacial-escarpment-64380.herokuapp.com/' + gender,
    }).then(function(response) {
      let videoEmbedCode = 'https://www.pornhub.com/embed/' + response.data.video_id;
      self.currentVideoId = response.data.video_id;
      self.trustVideo(videoEmbedCode);
    });

  };

  self.requestNewVideo = function(rating) {
    const params = '?rating=' + rating;
    const videoParams = '&video_id=' + self.currentVideoId;
    $http({
      method: 'GET',
      url: 'https://glacial-escarpment-64380.herokuapp.com/' + self.preference + params + videoParams,
    }).then(function(response) {
      let videoEmbedCode = "https://www.pornhub.com/embed/" + response.data.video_id;
      self.currentVideoId = response.data.video_id;
      self.trustVideo(videoEmbedCode);
    });
  };

  self.trustVideo = function(videoUrl) {
    self.currentVideo = $sce.trustAsResourceUrl(videoUrl);
  };

}]);
