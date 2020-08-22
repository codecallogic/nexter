import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Test from '../../src/app/test'
import HomePage from '../../src/app/HomePage'

function App() {
  return (
    <div>
      <Switch>
          <Route exact path={"/test"} render={() => 
            <Test/>
          }/>
          <Route exact path={"/"} render={() => 
            <HomePage/>
          }/>
      </Switch>
    
    </div>
  );
}

export default App;
