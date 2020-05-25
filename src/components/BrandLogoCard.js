import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const BrandLogoCard = props => {
  const {imgSource, imgStyle} = props;

  return (
    <View style={styles.logoContainer}>
      <Image
        source={imgSource}
        style={imgStyle != null ? imgStyle : styles.defaultLogoSize}
      />
    </View>
  );
};

export default BrandLogoCard;
