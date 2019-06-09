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



    onDeleteAppointment(index){
      modelAppointment.deleteAppointment(index)
      .then(() =>{
        window.location.assign("#/appointment-list" + index);
      });
    }
}

const appointmentsListPresenter = new AppointmentsListPresenter();

export default appointmentsListPresenter;