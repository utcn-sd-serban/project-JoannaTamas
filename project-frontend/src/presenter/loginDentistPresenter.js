import modelDentist from "../model/modelDentist";

class CreateDentistPresenter {

    onLoginDentist() {

   //   for (let i=0; i<modelPatient.state.patients.length; i++) {
        //if( modelPatient.state.patients[i].username === modelPatient.state.currentPatient.username)
                window.location.assign("#/dentist-operations");          
  //}


    }


    onCheck(property, value) {
        modelDentist.changeNewPatientProperty(property, value);
    }

}

const loginDentistPresenter = new CreateDentistPresenter();

export default loginDentistPresenter;