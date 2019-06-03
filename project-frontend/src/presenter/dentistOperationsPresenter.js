class DentistOperationsPresenter {

    onListAppointments(){
        window.location.assign("#/appointments-list");
    }

}

const dentistOperationsPresenter  = new DentistOperationsPresenter ();

export default dentistOperationsPresenter ;