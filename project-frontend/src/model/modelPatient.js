import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            patients: [{ 
                username:"patient",
                password:"password"
            }],
                currentPatient: {
                username: "",
                password: ""
             },
 
        };
    }



  
   changeNewPatientProperty(property, value) {
    this.state = {
        ...this.state,
        currentPatient: {
            ...this.state.currentPatient,
            [property]: value
        }
    };
    this.emit("change", this.state);
}

}

const modelPatient = new Model();

export default modelPatient;