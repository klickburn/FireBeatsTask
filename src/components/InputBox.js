import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import styles from './styles';

const InputBox = props => {
  const iconRight = () => {
    switch (props.type) {
      case 'date':
        return (
          <Image
            source={require('../assets/calendar-date.png')}
            style={styles.calenderImg}
          />
        );

      case 'dropdownOptions':
        return (
          <View style={styles.optionsBox}>
            <Text style={{color: 'gray'}}>{props.options[0]}</Text>
            <Image
              source={require('../assets/drop-down.png')}
              style={styles.dropdownOptionImg}
            />
          </View>
        );

      case 'dropdown':
        return (
          <Image
            source={require('../assets/drop-down.png')}
            style={styles.dropdownImg}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={[styles.inputContainer, props.styles]}>
      <TextInput
        underlineColorAndroid="transparent"
        style={{
          fontSize: props.multiline ? 12 : 14,
          marginLeft: 15,
          flex:1
        }}
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        multiline={props.multiline ? true : false}
        value={props.value}
        onChangeText={value => props.onChange && props.onChange(value)}
      />
      {props.type != null && iconRight()}
    </View>
  );
};

export default InputBox;
