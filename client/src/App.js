import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Registration from './components/Registration';

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route path="/" exact render={
        ()=>{
          return (<Login/>)
        }
      }/>

      <Route path="/Registration" exact render={
        ()=>{
          return (<Registration/>)
        }
      }/>
      
      <Route render={
        ()=>{
          return (<h2>404-----Error found</h2>)
        }
      }/>

    </Switch>  
    </div>
    </Router>
  );
}

export default App;
