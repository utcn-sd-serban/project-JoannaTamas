import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartLoginPatient from './view/SmartLoginPatient';

import SmartPatientOperations from './view/SmartPatientOperations';
import SmartDentistOperations from './view/SmartDentistOperations';
import SmartAppointmentsList from './view/SmartAppointmentsList';
import SmartCreateAppointment from './view/SmartCreateAppointment';






const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLoginPatient} path="/" />
        <Route exact={true} component={SmartPatientOperations} path="/patient-operations" />
        <Route exact={true} component={SmartDentistOperations} path="/dentist-operations" />
        <Route exact={true} component={SmartAppointmentsList} path="/appointments-list" />
        <Route exact={true} component={SmartCreateAppointment} path="/create-appointment" />
        <Route exact={true} component={SmartAppointmentsList} path="/appointment-list/:index" />
        
      </Switch>
    </HashRouter>
  </div>
);


export default App;