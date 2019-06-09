import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";
import WebSocketListener from "../ws/WebSocketListener";


const client= new RestClient("ioana","pass");
const listener = new WebSocketListener("ioana","pass");



class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            appointments: [{
               date:"2019-02-09",
               reason:"some reason",
               patient_id_id:"1"  
            }, {
                date:"2018-02-09",
               reason:"some other reason ",
               patient_id_id:"1"
            }],
            newAppointment: {
               date: "",
               reason: "",
               patient_id_id: ""
              
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
    
    
    
    addAppointment(date,reason,patient_id_id){
        return client.createAppointment(date,reason,patient_id_id)
        .then(appointment=> this.appendAppointment(appointment));
    
}
         

    deleteAppointment(index){
        var id=this.getAppointmentId(index);
        return client.deleteAppointment(id);
    }

    getAppointmentId(index){
        return this.state.appointments[index].id;

    }

    appendAppointment(appointment){
        this.state = {
            ...this.state,
            appointments: this.state.appointments.concat([appointment])
        };
       
        this.emit("change", this.state);

    }
    /*
    addAppointment(date,reason,patient_id_id) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                date:date,
                reason,
                patient_id_id
               
              
            }])
        };
        this.emit("change", this.state);
    }
*/

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

    if(event.type === "APPOINTMENT_DELETED"){
        modelAppointment.deleteAppointment(event.id);

    }
});

export default modelAppointment;