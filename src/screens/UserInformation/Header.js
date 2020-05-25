import React from 'react';
import {View, Image, Text} from 'react-native';
import FirebeatsHorizontalLogo from '../../components/FirebeatsHorzontalLogo';
import commonStyles from '../commonStyles';

const Header = () => {
  return (
    <View style={commonStyles.header}>
      <FirebeatsHorizontalLogo />
      <View style={{width: '95%'}}>
        <Image
          source={require('../../assets/progressbar.png')}
          style={commonStyles.stepIndicatorImg}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={commonStyles.stepText}>Account Creation</Text>
          <Text style={commonStyles.stepText}>User Information</Text>
          <Text style={commonStyles.stepText}>Emergency Contact</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
