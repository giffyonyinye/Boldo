import React from 'react';
import Blog from './Blog';
import Connect1 from './Connect1';
import Connect2 from './Connect2';
import Connect3 from './Connect3';
import Enterprise from './Enterprise';
import OurServices from './OurServices';
import SaveTime from './SaveTime';
import StartNow from './StartNow';

const HomePage = () => {
  return (
    <>
        <SaveTime/>
        <OurServices/>
        <Connect1/>
        <Connect2/>
        <Enterprise/>
        <Connect3/>
        <Blog/>
        <StartNow/>
    </>
  )
}

export default HomePage