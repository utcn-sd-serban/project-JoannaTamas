import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";
import WebSocketListener from "../ws/WebSocketListener";


const client= new RestClient("patient","password");
const listener = new WebSocketListener("patient","password");

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            appointments: [{
               date:"2019-02-09",
               reason:"some reason",
               idpatient:"1"  
            }, {
                date:"2018-02-09",
               reason:"some other reason ",
               idpatient:"1"
            }],
            newAppointment: {
               date: "",
               reason: "",
               idpatient: ""
              
            },
         
           selectedQuestionIndex: -1
        };
    }

    changeSelectedAppointmentsIndex(index) {
        this.state = {
            ...this.state,
            selectedAppointmentIndex: index
        };
        this.emit("change", this.state);
    }
/*
    loadAppointments(appointments){
        this.state = {
            ...this.state,
            appointments:appointments
        };
        this.emit("change", this.state);

    }

    */

    loadAppointments(){
        return client.loadAllAppointments().then(appointments => {
            this.state = { 
                ...this.state, 
                appointments: appointments
            };
            this.emit("change", this.state);
        })
    }
    
    
    /*
    addQuestion(author,title, text,date,tag){
        return client.createQuestion(author,title, text,date,tag)
        .then(question=> this.appendQuestion(question));
    
}
*/

    appendAppointment(appointment){
        this.state = {
            ...this.state,
            appointments: this.state.appointments.concat([appointment])
        };
       
        this.emit("change", this.state);

    }
    
    addAppointment(date,reason,idpatient) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                date:date,
                reason,
                idpatient
               
              
            }])
        };
        this.emit("change", this.state);
    }


    changeNewAppointmentProperty(property,value) {
        this.state = {
            ...this.state,
            newAppointment: {
                ...this.state.newAppointment,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    
    newAppointmentList(appointments){
        this.state = {
            ...this.state,
            appointments:appointments
        };
        this.emit("change", this.state);

    }

 
    
}



const modelAppointment = new Model();

listener.on("event", event => {
    if (event.type === "APPOINTMENT_CREATED") {
        modelAppointment.appendAppointment(event.appointment);
    }
});

export default modelAppointment;