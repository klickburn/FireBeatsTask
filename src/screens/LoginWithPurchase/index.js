import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from './Header';
import BrandsDisplay from './BrandsDisplay';
import Footer from './Footer';
import commonStyles from '../commonStyles';

const LoginWithPurchase = props => {
  const handleSubmit = () => {
    props.navigation.navigate('UserInformation');
  };

  return (
    <View style={commonStyles.flex1}>
      <ScrollView contentContainerStyle={commonStyles.flexGrow1}>
        <Header />
        <BrandsDisplay />
        <Footer handleSubmit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

export default LoginWithPurchase;
