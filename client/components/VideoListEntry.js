class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.clickHandlerFunc(this.props.video);
  }

  render() {
    var snippet = this.props.video.snippet;
    return (
      <div className="video-list-entry" onClick={this.handleClick.bind(this)}>
        <div className="media-left media-middle">
          <img className="media-object" src={snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{snippet.title}</div>
          <div className="video-list-entry-detail">{snippet.description}</div>
        </div>
      </div>

    );
  }
}

window.VideoListEntry = VideoListEntry;
