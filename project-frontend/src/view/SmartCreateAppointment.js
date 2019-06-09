import React, { Component } from "react";
import modelAppointment from "../model/modelAppointment";

import CreateAppointment from "./CreateAppointment";
import createAppointmentPresenter from "../presenter/createAppointmentPresenter";

const mapModelStateToComponentState = modelState => ({
  
    date: modelState.newAppointment.date,
    reason: modelState.newAppointment.reason,
    patient_id_id:modelState.newAppointment.patient_id_id
});

export default class SmartCreateAppointment extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelAppointment.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelAppointment.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelAppointment.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateAppointment
                onCreate={createAppointmentPresenter.onCreate}
                onChange={createAppointmentPresenter.onChange}
                date={this.state.date}
                reason={this.state.reason}
                patient_id_id={this.state.patient_id_id}
               
                 />
        );
    }
}