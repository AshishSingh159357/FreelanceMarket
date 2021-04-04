import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Registration from './components/Registration';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import GigDetail from './components/GigDetail';
import GigDetailTable from './components/GigDetailTable';
import Buyer from './components/BuyerInterface';
import PostProject from './components/PostProject';
import BrowseProject from './components/BrowseProject';
import PostProjectDetail from './components/PostProjectDetail';
import Offer from './components/Offer';
import OfferList from './components/OfferList'
import ActiveProject from './components/ActiveProject';
import ActiveProjectList from './components/AcitveProjectList';
import FreelancerActiveProject from './components/FreelancerActiveProject';

function App() {
  var a = localStorage.getItem("Post_Project_name");

  return (
    <Router>
      <div>
        <Switch>

        <Route path="/FreelancerActiveProject/:id" component={FreelancerActiveProject} />

          <Route path="/ActiveBuyerProject" exact render={
            () => {
              return (<ActiveProjectList />)
            }
          } />

          <Route path="/ActiveBuyerProject/:id" component={ActiveProject} />



          <Route path="/OfferList" exact render={
            () => {
              return (< OfferList />)
            }
          } />


          <Route path="/OfferList/:id" component={Offer} />





          <Route path="/Browse" exact render={
            () => {
              return (<BrowseProject />)
            }
          } />


          <Route path="/Browse/:id" component={PostProjectDetail} />


          <Route path="/PostProject" exact render={
            () => {
              return (<PostProject />)
            }
          } />


          <Route path="/Buyer" exact render={
            () => {
              return (<Buyer />)
            }
          } />


          <Route path="/Gig" exact render={
            () => {
              return (<GigDetailTable />)
            }
          } />


          <Route path="/home" exact render={
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
