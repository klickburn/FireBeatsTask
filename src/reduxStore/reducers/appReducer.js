import {ADD_USER_INFO, ADD_EMERGENCY_CONTACT} from '../actions/appActions';

const initState = {
  userInfo: {},
  emergencyContact: {},
};

const appReducer = (state = initState, action) => {
  let {type, payload} = action;

  switch (type) {
    case ADD_USER_INFO:
      console.log('....User info added....', payload.userInfo);
      return {
        ...state,
        userInfo: payload.userInfo,
      };

    case ADD_EMERGENCY_CONTACT:
      console.log('....Emergency contact added....', payload.emergencyContact);
      return {
        ...state,
        emergencyContact: payload.emergencyContact,
      };
  }
};

export default appReducer;
