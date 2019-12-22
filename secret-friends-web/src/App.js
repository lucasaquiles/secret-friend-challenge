import React from 'react';
import { Provider } from 'react-redux';

import './styles/global.css'

import store from './store'
import ComponentList from './components/ComponentList';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
