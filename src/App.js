import React from 'react';
import './App.css';
import Header from './Header';
import Video from './Video';

function App() {
  return (
    <div className="app">
    <Header/>
    <div className="app_videos">
    <Video />
    {/* <Video /> */}
    </div>
    </div>
  );
}

export default App;
