import React, { constructor } from 'react';
import logo from './logo.svg';
import './App.css';
import CarView from './components/CarView';
import PersonView from './components/PersonView';
import Car from './interfaces/Car';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  let cars: Car[] = [
    {
      brand: "Porche",
      model: "Carrera",
      manufactured: new Date(2019, 6, 15)
    },
    {
      brand: "Audi",
      model: "A4",
      manufactured: new Date(2005, 6, 15)
    },
  ];

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" strict exact>
            <PersonView firstName="André" lastName="Mathisen" cars={cars} />
        </Route>
        <Route path="/car" strict exact>
            <CarView brand={cars[0].brand} model={cars[0].model} manufactured={cars[0].manufactured} />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}