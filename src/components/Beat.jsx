import React, { Component } from "react";
import beat from '../assets/music/ANGGREK-1.mp3'
import cover from '../assets/images/cover1.jpg'
import './styles/Beat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Beat extends Component {
    // Create state
    state = {
  
      // Get audio file in a variable
      audio: new Audio(beat),
  
      // Set initial state of song
      isPlaying: false,
    };
  
    // Main function to handle both play and pause operations
    playPause = () => {
  
      // Get state of song
      let isPlaying = this.state.isPlaying;
  
      if (isPlaying) {
        // Pause the song if it is playing
        this.state.audio.pause();
      } else {
  
        // Play the song if it is paused
        this.state.audio.play();
      }
  
      // Change the state of song
      this.setState({ isPlaying: !isPlaying });
    };
  
    render() {
      return (
        <div className="container">
        <div className='beatButton' onClick={this.playPause}>
                <img src={cover} className='beatCover' alt='Cover art' />
                
          
                {this.state.isPlaying ? 
              <FontAwesomeIcon icon="fa-solid fa-pause" className="pause" size="3x" /> : 
              <FontAwesomeIcon icon="fa-solid fa-play" className="play" size="3x" />}
          
        </div>
        <p>ANGGREK</p>
        </div>
      );
    }
  }
  
  export default Beat