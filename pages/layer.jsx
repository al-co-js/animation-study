import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const layer = () => (
  <ParallaxProvider>
    <Parallax y={['0%', '-100%']}>
      
    </Parallax>

    <style jsx>
      {`
        #video {
          width: 100%;
        }
      `}
    </style>

    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
          background-color: #2b2b2b;
          color: #efefef;
          overflow-x: hidden;
        }
      `}
    </style>
  </ParallaxProvider>
);

export default layer;
