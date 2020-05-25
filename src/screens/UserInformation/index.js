import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {saveUserInfo} from '../../reduxStore/actions/appActions';

import commonStyles from '../commonStyles';
import Header from './Header';
import InputBox from '../../components/InputBox';
import Footer from './Footer';
import Avatar from './Avatar';

const UserInformation = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = () => {
    let userInfo = {firstName, lastName, dateOfBirth, gender, weight, height};
    props.saveUserInfo(userInfo);
    props.navigation.navigate('EmergencyContact');
  };

  return (
    <View style={commonStyles.flex1}>
      <ScrollView
        contentContainerStyle={[
          commonStyles.flexGrow1,
          commonStyles.alignCenter,
        ]}>
        <Header />
        <Avatar />
        <InputBox
          placeholder="First name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputBox
          placeholder="Last name"
          value={lastName}
          onChange={setLastName}
        />
        <InputBox
          placeholder="Date of birth"
          type="date"
          value={dateOfBirth}
          onChange={setDateOfBirth}
        />
        <InputBox
          placeholder="Gender"
          type="dropdown"
          value={gender}
          onChange={setGender}
        />
        <InputBox
          placeholder="Weight"
          type="dropdownOptions"
          options={['kg', 'pound']}
          value={weight}
          onChange={setWeight}
        />
        <InputBox
          placeholder="Height"
          type="dropdownOptions"
          options={['cm', 'm']}
          value={height}
          onChange={setHeight}
        />
        <InputBox
          placeholder="Underlying Conditions (Multichecklist)"
          type="dropdown"
        />
        <InputBox
          placeholder="If you have any other underlying conditions or any other comments, please mention it here. (Optional)"
          multiline={true}
        />
        <Footer handleSubmit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    saveUserInfo: data => {
      dispatch(saveUserInfo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
