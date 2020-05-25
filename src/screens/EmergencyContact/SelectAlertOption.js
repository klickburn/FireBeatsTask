import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from 'react-native-check-box';
import commonStyles from '../commonStyles';

const SelectAlertOption = () => {
  const renderOptions = () => {
    const options = ['Email', 'Phone call', 'Text Message'];

    return options.map(option => (
      <CheckBox
        isChecked={option === 'Email'}
        onClick={() => console.log('tapped')}
        style={commonStyles.checkbox}
        checkBoxColor="#979797"
        checkedCheckBoxColor="#759D75"
        rightText={option}
        rightTextStyle={commonStyles.checkboxText}
      />
    ));
  };

  return (
    <View style={commonStyles.alertBox}>
      <Text style={commonStyles.alertText}>Send alert signal by</Text>
      {renderOptions()}
    </View>
  );
};

export default SelectAlertOption;
