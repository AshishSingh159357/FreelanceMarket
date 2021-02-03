import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Registration from './components/Registration';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import GigDetail from './components/GigDetail';
import GigDetailTable from './components/GigDetailTable';





function App() {

  return (
    <Router>
      <div>
        <Switch>


        <Route path="/Gig" render={
            () => {
              return (<GigDetailTable />)
            }
          } />

          <Route path="/home" render={
            () => {
              return (<Home />)
            }
          } />


          <Route path="/" exact render={
            () => {

              return (<Login />)
            }
          } />

          <Route path="/Registration" exact render={
            () => {
              return (<Registration />)
            }
          } />


          <Route path="/dashboard" exact render={
            () => {
              return (<Dashboard />)
            }
          } />

          <Route path="/Gig-detail-submit" exact render={
            () => {
              return (<GigDetail />)
            }
          } />


          <Route render={
            () => {
              return (<h2>404-----Error found</h2>)
            }
          } />



        </Switch>
      </div>
    </Router>
  );

}

export default App;
