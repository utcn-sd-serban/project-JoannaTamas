import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartLoginPatient from './view/SmartLoginPatient';

import SmartPatientOperations from './view/SmartPatientOperations';
import SmartDentistOperations from './view/SmartDentistOperations';
import SmartAppointmentsList from './view/SmartAppointmentsList';






const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>

       
        <Route exact={true} component={SmartLoginPatient} path="/" />
        <Route exact={true} component={SmartPatientOperations} path="/patient-operations" />
        <Route exact={true} component={SmartDentistOperations} path="/dentist-operations" />
        <Route exact={true} component={SmartAppointmentsList} path="/appointments-list" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;