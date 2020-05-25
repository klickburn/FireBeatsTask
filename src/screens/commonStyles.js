import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },

  // UserInfo
  header: {
    marginTop: '6%',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 16,
  },
  stepIndicatorImg: {width: '100%', height: 50, alignSelf: 'center'},
  stepText: {fontSize: 12, color: '#759D75'},
  avatarContainer: {flex: 1, alignItems: 'center'},
  textBlack: {color: '#434343'},
  avatarImg: {height: 100, width: 100, marginVertical: 15},
  uploadBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#D8D8D8',
    width: 108,
    height: 25,
  },
  uploadBtnText: {color: '#fff', fontSize: 12},
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    borderTopWidth: 2,
    borderColor: '#00000010',
    paddingVertical: 13,
  },

  //LoginWithPurchase
  headerLogin: {marginTop: '6%', alignItems: 'center', marginHorizontal: '15%'},
  descriptionText: {
    textAlign: 'center',
    color: '#434343',
    fontSize: 14,
    lineHeight: 16,
  },
  brandsContainer: {alignItems: 'center'},
  loginText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: '7%',
    color: '#434343',
  },
  brandRow: {
    flexDirection: 'row',
    marginTop: 25,
    width: '90%',
    justifyContent: 'space-between',
  },
  footerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    borderTopWidth: 1,
    borderColor: '#00000010',
    paddingTop: 13,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#434343',
    marginTop: 10,
  },
  contactText: {
    textDecorationLine: 'underline',
    marginVertical: 6,
    color: '#43434345',
  },

  //EmergencyContact
  additionalText: {
    width: '88%',
    marginTop: 42,
    color: '#4A4A4A',
    lineHeight: 18,
  },
  emergencyText: {color: '#434343', fontSize: 20, marginTop: 14},
  roundBtn: {
    marginTop: 8,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#759D75',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  btnText: {color: '#fff', fontSize: 24},
  alertBox: {width: '85%'},
  alertText: {color: '#434343', marginBottom: 15},
  checkbox: {marginLeft: 50},
  checkboxText: {color: '#434343'},
  footerContact: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 2,
    borderColor: '#00000010',
    paddingVertical: 13,
  },
  footerCheckContainer: {flexDirection: 'row', alignItems: 'center'},
  footerCheckText: {fontSize: 14, color: '#434343'},
});

export default styles;
