import modelAppointment from "../model/modelAppointment";

class CreateAppointmentPresenter {

    onCreate() {
        modelAppointment.addAppointment(
                                   modelAppointment.state.newAppointment.date,
                                   modelAppointment.state.newAppointment.reason,
                                   modelAppointment.state.newAppointment.idpatient
                               
                                   );
        modelAppointment.changeNewAppointmentProperty("date", "");
        modelAppointment.changeNewAppointmentProperty("reason ",  "");
        modelAppointment.changeNewAppointmentProperty("idpatient  ",   "");
       
        window.location.assign("#/appointment-list");
    }

    onChange(property, value) {
        modelAppointment.changeNewAppointmentProperty(property, value);
    }

}

const createAppointmentPresenter = new CreateAppointmentPresenter();

export default createAppointmentPresenter;