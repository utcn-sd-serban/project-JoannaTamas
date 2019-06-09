class PatientOperationsPresenter {

    onAddAppointment() {
        
        window.location.assign("#/create-appointment");
    }

    onListAppointments(){
        window.location.assign("#/appointments-list");
    }
 

}

const patientOperationsPresenter  = new PatientOperationsPresenter ();

export default patientOperationsPresenter ;