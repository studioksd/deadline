import React from 'react'
import './styles/Capsule.css'
import Beat from './Beat'
import MultiPlayer from './Multiplayer'

function Capsule() {
    const beats = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"]
    return(
        <div className='capsule'> 
        <MultiPlayer 
        urls={beats}
        />

        </div>
    )
}

export default Capsule