import React, { Component } from "react";
import  modelAppointment from "../model/modelAppointment";
import AppointmentsList from "./AppointmentsList";
import appointmentsListPresenter from "../presenter/appointmentsListPresenter";



const mapModelStateToComponentState = modelState => ({
    appointments: modelState.appointments
});

export default class SmartAppointmentsList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelAppointment.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelAppointment.addListener("change", this.listener);
        appointmentsListPresenter.onInit();
    }

    componentWillUnmount() {
        modelAppointment.removeListener("change", this.listener);
    }

    render() {
        return (
            <AppointmentsList 
               // onViewDetails={questionsListPresenter.onViewDetails}
               // onCreateAppointment={appointmentsListPresenter.onCreateAppointment}
               onDelete={appointmentsListPresenter.onDeleteAppointment}
               appointments={this.state.appointments} />
        );
    }
}