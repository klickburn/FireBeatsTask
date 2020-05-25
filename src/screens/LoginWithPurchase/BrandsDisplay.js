import React from 'react';
import {View, Text} from 'react-native';
import BrandLogoCard from '../../components/BrandLogoCard';
import commonStyles from '../commonStyles';

const BrandsDisplay = () => {
  return (
    <View style={commonStyles.brandsContainer}>
      <Text style={commonStyles.loginText}>Login with</Text>

      <View style={commonStyles.brandRow}>
        <BrandLogoCard
          imgSource={require('../../assets/fitbit-logo.png')}
          imgStyle={{width: 115, height: 30}}
        />
        <BrandLogoCard
          imgSource={require('../../assets/garmin-logo.png')}
          imgStyle={{width: 111, height: 30}}
        />
      </View>

      <View style={commonStyles.brandRow}>
        <BrandLogoCard
          imgSource={require('../../assets/apple-watch-logo.png')}
          imgStyle={{width: 146, height: 33}}
        />
        <BrandLogoCard
          imgSource={require('../../assets/wearOS-logo.png')}
          imgStyle={{width: 153, height: 41}}
        />
      </View>

      <View style={commonStyles.brandRow}>
        <BrandLogoCard
          imgSource={require('../../assets/omron-logo.png')}
          imgStyle={{width: 100, height: 25}}
        />
        <BrandLogoCard
          imgSource={require('../../assets/accu-chek-logo.png')}
          imgStyle={{width: 148, height: 20}}
        />
      </View>
    </View>
  );
};

export default BrandsDisplay;
