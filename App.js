import React from 'react';
import {Provider} from 'react-redux';
import store from './src/reduxStore/store';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
