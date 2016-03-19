class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.list.map( video => 
            <VideoListEntry video={video} key={video.etag} clickHandlerFunc={this.props.clickHandlerFunc}/>
        )}
      </div>
    );
  }
}

window.VideoList = VideoList;
