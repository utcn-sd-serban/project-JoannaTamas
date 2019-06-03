import PatientOperations from "./PatientOperations";
import patientOperationsPresenter from "../presenter/patientOperationsPresenter";
import React, { Component } from "react";


export default class SmartUserOperations extends Component {
  

    render() {
        return (
            <PatientOperations
               // onAddQuestion    ={userOperationsPresenter.onAddQuestion}
                onListAppointments  ={patientOperationsPresenter.onListAppointments}
                //onFilterQuestions={userOperationsPresenter.onFilterQuestions}
                
                 />
        );
    }
}