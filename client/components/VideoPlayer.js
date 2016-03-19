class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var snippet = this.props.video.snippet;
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + this.props.video.id.videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{snippet.title}</h3>
          <div>{snippet.description}</div>
        </div>
      </div>
    );
  }
}

window.VideoPlayer = VideoPlayer;
