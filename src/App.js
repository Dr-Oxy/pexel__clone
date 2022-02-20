/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import Layout from './pages/Layout';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Layout />
      </AppProvider>
    </div>
  );
}

export default App;
