import modelPatient from "../model/modelPatient";

class CreatePatientPresenter {

    onLoginPatient() {

      for (let i=0; i<modelPatient.state.patients.length; i++) {
        if( modelPatient.state.patients[i].username === modelPatient.state.currentPatient.username)
                window.location.assign("#/patient-operations");          
  }


    }

 

    onCheck(property, value) {
        modelPatient.changeNewPatientProperty(property, value);
    }

}

const loginPatientPresenter = new CreatePatientPresenter();

export default loginPatientPresenter;