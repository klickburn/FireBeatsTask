import React from 'react';
import {View, Text} from 'react-native';
import FirebeatsSquareLogo from '../../components/FirebeatsSquareLogo';
import commonStyles from '../commonStyles';

const Header = () => {
  return (
    <View style={commonStyles.headerLogin}>
      <FirebeatsSquareLogo />
      <Text style={commonStyles.descriptionText}>
        {
          'Our Artificial Intelligence algorithms \ntrack your health tracker \nto track your health'
        }
      </Text>
    </View>
  );
};

export default Header;
