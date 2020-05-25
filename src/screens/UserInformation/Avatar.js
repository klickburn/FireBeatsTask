import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import commonStyles from '../commonStyles';

const Avatar = () => {
  return (
    <View style={commonStyles.avatarContainer}>
      <Text style={commonStyles.textBlack}>
        Welcome! We would love to know about you.
      </Text>
      <Image
        source={require('../../assets/avatar.png')}
        style={commonStyles.avatarImg}
      />
      <TouchableOpacity style={commonStyles.uploadBtn}>
        <Text style={commonStyles.uploadBtnText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
