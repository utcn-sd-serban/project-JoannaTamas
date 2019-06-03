import modelAppointment from "../model/modelAppointment";
import modelPatient from "../model/modelPatient";


class AppointmentsListPresenter {
    onCreateAppointment() {
      //window.location.assign("#/create-question");
      modelAppointment.addAppointment(
        Date.now(),
        modelAppointment.state.newAppointment.reason,
        modelPatient.state.currentPatient.username
        );
    }
    onInit(){
      modelAppointment.loadAppointments();
    }
 

}

const appointmentsListPresenter = new AppointmentsListPresenter();

export default appointmentsListPresenter;