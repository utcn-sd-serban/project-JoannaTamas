import PatientOperations from "./PatientOperations";
import patientOperationsPresenter from "../presenter/patientOperationsPresenter";
import React, { Component } from "react";


export default class SmartUserOperations extends Component {
  

    render() {
        return (
            <PatientOperations
                onAddAppointment ={patientOperationsPresenter.onAddAppointment}
                onListAppointments  ={patientOperationsPresenter.onListAppointments}
                 />
        );
    }
}