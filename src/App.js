import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login , Dashboard } from './Components'
import Reducer from './Store/Reducer/Reducer';

function App() {
  return (
    <Provider store={createStore(Reducer)}>
      <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Router>
    </Provider>
  );
}

export default App;
