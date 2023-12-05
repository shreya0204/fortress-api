'use client';

import React, { FC } from 'react';
import { CSSProperties } from 'react';
import Lottie from 'react-lottie';

interface LottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
}

const LottiePlayer: FC<LottiePlayerProps> = ({ animationData, style }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} style={style} />;
};

export default LottiePlayer;
