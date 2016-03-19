var search = (options, callback) => {
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
      key: authKey,
      type: 'video'
    },
    success: function(data) {
      if (data.items.length !== 0) {
        callback(data.items);
      } else {
        callback('No results found :(');
      }
    }
  });

};

var searchYouTube = _.debounce(search, 400);

window.searchYouTube = searchYouTube;

