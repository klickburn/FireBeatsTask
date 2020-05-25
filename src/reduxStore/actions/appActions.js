export const ADD_USER_INFO = 'ADD_USER_INFO';
export const ADD_EMERGENCY_CONTACT = 'ADD_EMERGENCY_CONTACT';

export const saveUserInfo = userInfo => {
  return dispatch => {
    dispatch({type: ADD_USER_INFO, payload: {userInfo}});
  };
};

export const saveEmergencyContact = emergencyContact => {
  return dispatch => {
    dispatch({type: ADD_EMERGENCY_CONTACT, payload: {emergencyContact}});
  };
};
