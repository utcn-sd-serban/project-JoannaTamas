const BASE_URL = "http://localhost:8080";

export default class RestClient {
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    loadAllAppointments() {
        return fetch(BASE_URL + "/appointments", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createAppointment(date,reason,patient_id_id) {
        return fetch(BASE_URL + "/appointments", {
            method: "POST", 
            body: JSON.stringify({
                id:null,
                date:date,
                reason:reason,
                patient_id_id:patient_id_id
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    deleteAppointment(id){
        return fetch(BASE_URL + "/appointments/"+ id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());

    }

    

}