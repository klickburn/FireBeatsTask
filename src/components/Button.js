import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  const {name, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryBtn}>
      <Text style={styles.primaryBtnText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
