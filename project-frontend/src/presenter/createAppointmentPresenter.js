import modelAppointment from "../model/modelAppointment";

class CreateAppointmentPresenter {

    onCreate() {
        modelAppointment.addAppointment(
                                   modelAppointment.state.newAppointment.date,
                                   modelAppointment.state.newAppointment.reason,
                                   modelAppointment.state.newAppointment.patient_id_id
                               
                                   );
        modelAppointment.changeNewAppointmentProperty("date", "");
        modelAppointment.changeNewAppointmentProperty("reason ",  "");
        modelAppointment.changeNewAppointmentProperty("patient_id_id  ",   "");
       
        window.location.assign("#/appointments-list");
    }

    onChange(property, value) {
        modelAppointment.changeNewAppointmentProperty(property, value);
    }

}

const createAppointmentPresenter = new CreateAppointmentPresenter();

export default createAppointmentPresenter;