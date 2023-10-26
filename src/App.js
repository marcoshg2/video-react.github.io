import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
      <div className='App' style={{width:'100%', height:'100%',position:'absolute'}}>
        <ReactPlayer
          url='https://youtu.be/iSfZC_x3ZSE'
          width='100%'
          height='100%'
          controls
          playing={true}
          volume='.8'
        />
      </div>
  );
}

export default App;
