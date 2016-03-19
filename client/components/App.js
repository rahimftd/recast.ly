class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videoData,
      currentVideo: this.props.videoData[0] 
    };
  }

  onVideoEntryClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList list={this.state.videos} clickHandlerFunc={this.onVideoEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videoData={window.exampleVideoData}/>, document.getElementById('app'));