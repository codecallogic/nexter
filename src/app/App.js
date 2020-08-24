import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Formosi from '../../src/app/formosi'
import HomePage from '../../src/app/HomePage'

function App() {
  return (
    <div>
      <Switch>
          <Route exact path={"/formosi"} render={() => 
            <Formosi/>
          }/>
          <Route exact path={"/"} render={() => 
            <HomePage/>
          }/>
      </Switch>
    
    </div>
  );
}

export default App;
