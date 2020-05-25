import React from 'react';
import {View, Text, CheckBox} from 'react-native';
import Button from '../../components/Button';
import commonStyles from '../commonStyles';

const Footer = props => {
  return (
    <View style={commonStyles.footerContact}>
      <View style={commonStyles.footerCheckContainer}>
        <CheckBox />
        <Text style={commonStyles.footerCheckText}>
          I accept{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            Terms & Conditions
          </Text>
        </Text>
      </View>
      <Button name="Done!" onPress={props.handleSubmit} />
    </View>
  );
};

export default Footer;
