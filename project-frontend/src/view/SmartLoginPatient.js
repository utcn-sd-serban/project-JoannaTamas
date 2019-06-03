import React, { Component } from "react";
import modelPatient from "../model/modelPatient";

import LoginUser from "./LoginUser";
import loginPatientPresenter from "../presenter/loginPatientPresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.currentPatient.username,
    password: modelState.currentPatient.password
});

export default class SmartLoginPatient extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelPatient.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <LoginUser
                onLoginPatient={loginPatientPresenter.onLoginPatient}
                onCheck={loginPatientPresenter.onCheck}
                />
        );
    }
}