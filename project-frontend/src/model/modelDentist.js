import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            dentists: [{ 
                username:"dentist",
                password:"password"
            }],
                currentDentist: {
                username: "",
                password: ""
             },
 
        };
    }



  
   changeNewUserProperty(property, value) {
    this.state = {
        ...this.state,
        currentDentist: {
            ...this.state.currentDentist,
            [property]: value
        }
    };
    this.emit("change", this.state);
}

}

const modelDentist = new Model();

export default modelDentist;