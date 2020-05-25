import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import commonStyles from '../commonStyles';

const Footer = props => {
  return (
    <View style={commonStyles.footerLogin}>
      <Button name="Purchase Health Tracker" onPress={props.handleSubmit} />
      <Text style={commonStyles.footerText}>
        {
          'Receive upto 50% off when you purchase \nhealth trackers from our app!!'
        }
      </Text>
      <Text style={commonStyles.contactText}>Contact Us</Text>
    </View>
  );
};

export default Footer;
