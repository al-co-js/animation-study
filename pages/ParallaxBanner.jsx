import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const parallaxBanner = () => (
  <ParallaxProvider>
    <ParallaxBanner
      layers={[
        {
          image: '/parallaxImage.jpg',
          amount: 1.2,
        },
      ]}
    />
    <p>a</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>a</p>
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

export default parallaxBanner;
