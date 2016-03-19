var searchYouTube = (options, callback) => {
  // TODO
  var query = options.query;
  var max = options.max;
  var authKey = options.authKey;

  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: query,
      maxResults: max,
      part: 'snippet',
      key: authKey
    },
    success: function(data) {
      console.log(data);
    }
  });

};

window.searchYouTube = searchYouTube;
