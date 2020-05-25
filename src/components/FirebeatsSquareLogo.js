import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const FirebeatsSquareLogo = () => (
  <Image
    source={require('../assets/FireBeats-square.png')}
    style={styles.firebeatsImg}
  />
);

export default FirebeatsSquareLogo;
