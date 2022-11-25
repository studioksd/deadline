import React, { useState, useEffect } from "react";
import beat from '../assets/music/ANGGREK-1.mp3'
import './styles/Beat.css'
import cover from '../assets/images/SoundHelix-Song-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        audio: new Audio(url),
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map(url => {
      const titleArray = url.split('/');
      const titleMP3 = titleArray[5].split('.');
      const title = titleMP3[0];
      return {
        url,
        playing: false,
        title: title,
        cover: cover
      };
    })
  );

  const toggle = targetIndex => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex(p => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle];
};

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);
  return (
    <div className="multiplayer">
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)}/>
      ))}
    </div>
  );
};

const Player = ({ player, toggle }) => (
    <div className="container">
        <div className='beatButton' onClick={toggle}>
                <img src={player.cover} className='beatCover' alt='Cover art' />
                
          
                {player.playing ? 
              <FontAwesomeIcon icon="fa-solid fa-pause" className="pause" size="3x" /> : 
              <FontAwesomeIcon icon="fa-solid fa-play" className="play" size="3x" />}
          
        </div>
        <p>{player.title}</p>
    </div>
);

export default MultiPlayer;
