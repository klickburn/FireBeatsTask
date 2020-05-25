import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginWithPurchase from '../screens/LoginWithPurchase';
import UserInformation from '../screens/UserInformation';
import EmergencyContact from '../screens/EmergencyContact';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="LoginWithPurchase" component={LoginWithPurchase} />
      <Stack.Screen name="UserInformation" component={UserInformation} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
    </Stack.Navigator>
  );
};

export default AppStack;
