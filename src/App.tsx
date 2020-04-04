import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';
import TodoManager from './components/TodoManager';

export default function App() {

  return (
    <div className="App">
      <Router>
        <HeaderView />
        <Switch>
          <Route path="/" strict exact>
            <TodoManager />
          </Route>
        </Switch>
        <FooterView />
      </Router>
    </div>
  );
}