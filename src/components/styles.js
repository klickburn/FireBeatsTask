import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  firebeatsImg: {width: 200, height: 150},

  firebeatsHorizontal: {width: 200, height: 66},

  logoContainer: {
    width: 158,
    height: 53,
    backgroundColor: '#F6FFF5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1.5,
  },
  defaultLogoSize: {width: 115, height: 30},

  primaryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#759D75',
    height: 48,
    width: 327,
    borderRadius: 3,
  },
  primaryBtnText: {color: '#fff'},

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
  },

  optionsBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: 'gray',
    width: '18%',
  },
  calenderImg: {width: 13, height: 15, marginRight: 12},
  dropdownImg: {width: 10, height: 10, marginRight: 12},
  dropdownOptionImg: {width: 10, height: 10, marginRight: 5},
});

export default styles;
