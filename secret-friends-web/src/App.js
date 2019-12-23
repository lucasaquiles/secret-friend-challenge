import React from 'react';
import { Provider } from 'react-redux';

import './styles/global.css'

import store from './store'
import Home from './pages/Home';
import Routes from './components/Routes'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Home />
      </Routes>
    </Provider>
  );
}

export default App;
