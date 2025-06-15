/* eslint-disable no-unused-vars */
import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div>
        <p>
          For Better Experience Download <br /> QuickBite App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Play Store" />
          <img src={assets.app_store} alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
