import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import commonStyles from '../commonStyles';

const Footer = props => {
  return (
    <View style={commonStyles.footer}>
      <Button name="Next" onPress={props.handleSubmit} />
    </View>
  );
};

export default Footer;
