import { Svg, Path } from 'react-native-svg';
import React from 'react';

// User sayfasındaki BottomTabBar iconu
const user = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
    >
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM31 18.5C31 22.0899 28.0899 25 24.5 25C20.9101 25 18 22.0899 18 18.5C18 14.9101 20.9101 12 24.5 12C28.0899 12 31 14.9101 31 18.5ZM35 37C35 34.3478 33.9464 31.8043 32.0711 29.9289C30.1957 28.0536 27.6522 27 25 27C22.3478 27 19.8043 28.0536 17.9289 29.9289C16.0536 31.8043 15 34.3478 15 37H25H35Z'
        fill='#E5B2CA'
      />
    </Svg>
  );
};

export default user;
