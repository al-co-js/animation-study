import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const layer = () => (
  <ParallaxProvider>
    <ParallaxBanner
      layers={[
        {
          children: <video autoPlay muted loop src="/layer.mp4" type="video/mp4" id="video" />,
          amount: 1.498969,
        },
      ]}
    />

    <style jsx>
      {`
        #video {
          position: absolute;
          left: 50%;
          transform: translate(-50%) scale(0.8);
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
