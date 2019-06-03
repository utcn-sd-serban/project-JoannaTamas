import React, { Component } from "react";
import modelDentist from "../model/modelDentist";

import LoginUser from "./LoginUser";
import loginDentistPresenter from "../presenter/loginDentistPresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.currentDentist.username,
    password: modelState.currentDentist.password
});

export default class SmartLoginDentist extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelDentist.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelDentist.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelDentist.removeListener("change", this.listener);
    }

    render() {
        return (
            <LoginUser
                onLoginDentist={loginDentistPresenter.onLoginDentist}
               // onCheck={loginPatientPresenter.onCheck}
                />
        );
    }
}