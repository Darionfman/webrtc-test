import React, { Component } from 'react'
import io from 'socket.io-client';
const SIGNALING_SERVER = 'https://localhost:8000/';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      channel: 'channel1',
      sender: Math.round(Math.random() * 999999999) + 999999999,
      videoSrc: null
    };
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    }
  }

  ioSetup = () => {
    const { channel, sender } = this.state;
    io.connect(SIGNALING_SERVER).emit('new-channel', {
      channel: channel,
      sender: sender
    });
  }

  handleVideo = (stream) => {
    // Update the state, triggering the component to re-render with the correct stream
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
  }

  videoError = () => {

  }

  render() {
    return <div>
      <video src={this.state.videoSrc} autoPlay="true" />
    </div>;
  }
}

export default App