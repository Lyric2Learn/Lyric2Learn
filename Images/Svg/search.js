import { Svg, Path } from 'react-native-svg';
import React from 'react';

// Main sayfasındaki textinput içindeki arama iconu
const search = () => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.4045 18.0971C21.0238 16.1815 22 13.7047 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C13.4167 22 15.6513 21.2207 17.4663 19.8996L26.2634 29L28.3162 27.3161L19.4045 18.0971ZM11 19.6728C6.21013 19.6728 2.32718 15.7899 2.32718 11C2.32718 6.21013 6.21013 2.32718 11 2.32718C15.7899 2.32718 19.6728 6.21013 19.6728 11C19.6728 15.7899 15.7899 19.6728 11 19.6728Z'
        fill='#E5B2CA'
        fillOpacity='0.8'
      />
    </Svg>
  );
};

export default search;
