import React from 'react';
import AppHeader from './AppHeader'
import AppBody from './AppBody'
import AppFooter from './AppFooter'

const App = () => {
  return (
    <div className="container-fluid App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;