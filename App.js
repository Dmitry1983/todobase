import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/state/store';
import AppNavigation from './src/navigation/AppNavigation';
import {RenderLoader} from './src/components/RenderLoader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<RenderLoader />} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
