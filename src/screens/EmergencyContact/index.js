import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {saveEmergencyContact} from '../../reduxStore/actions/appActions';

import commonStyles from '../commonStyles';
import Header from '../UserInformation/Header';
import InputBox from '../../components/InputBox';
import SelectAlertOption from './SelectAlertOption';
import Footer from './Footer';

const EmergencyContact = props => {
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const handleSubmit = () => {
    let emergencyContact = {
      userEmail,
      userPhone,
      contactFirstName,
      contactLastName,
      contactPhone,
    };
    props.saveEmergencyContact(emergencyContact);
    alert('Thank you');
  };

  return (
    <View style={commonStyles.flex1}>
      <ScrollView
        style={commonStyles.flex1}
        contentContainerStyle={[commonStyles.alignCenter]}>
        <Header />
        <SelectAlertOption />
        <InputBox
          placeholder="Your email"
          value={userEmail}
          onChange={setUserEmail}
        />
        <InputBox
          placeholder="Your phone number"
          value={userPhone}
          onChange={setUserPhone}
          type="dropdownOptions"
          options={['+0', '+91']}
        />
        <Text style={commonStyles.additionalText}>
          If you would like us to alert someone else, please provide their
          contact information below. (Optional)
        </Text>
        <Text style={commonStyles.emergencyText}>Emergency Contact</Text>
        <InputBox
          placeholder="First name"
          value={contactFirstName}
          onChange={setContactFirstName}
        />
        <InputBox
          placeholder="Last name"
          value={contactLastName}
          onChange={setContactLastName}
        />
        <InputBox
          placeholder="Phone number"
          type="dropdownOptions"
          options={['+0', '+91']}
          value={contactPhone}
          onChange={setContactPhone}
        />
        <View style={commonStyles.roundBtn}>
          <Text style={commonStyles.btnText}>+</Text>
        </View>
        <Footer handleSubmit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    saveEmergencyContact: data => {
      dispatch(saveEmergencyContact(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContact);
