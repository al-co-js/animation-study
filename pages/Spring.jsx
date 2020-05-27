import React from 'react';
import { useSpring, animated } from 'react-spring';

const Spring = () => {
  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans = (x, y) => `
    translate3d(${x / 10}px, ${y / 10}px, 0)
  `;

  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => {
        setSpring({ xy: calc(x, y) });
      }}
    >
      <animated.img
        className="card"
        src="/springIcon.png"
        style={{
          transform: spring.xy.interpolate(trans),
        }}
      />
      <div>
        아이콘 제작자
        <br />
        <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">
          Freepik
        </a>
        <br />
        from
        <br />
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>

      <style jsx>
        {`
          .container {
            text-align: center;
          }

          .card {
            position: absolute;
            will-change: 'transform';
          }
        `}
      </style>
    </div>
  );
};

export default Spring;
