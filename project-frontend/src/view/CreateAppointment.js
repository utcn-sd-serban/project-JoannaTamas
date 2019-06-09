import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CreateAppointment = ({ date , reason,patient_id_id, onCreate, onChange }) => (
    <div>
         <div class="jumbotron jumbotron-fluid">  
        
        <div class="container "> 
        <h1 >Add Appointment</h1>



        <div class="form-group">
              <label for="dat">Date:</label>
              <input type="date" class="form-control" id="dat" value={date} 
                onChange={ e => onChange("date", e.target.value) } />
        </div>

        <div class="form-group">
              <label for="ta">Reason:</label>
              <input type="reason" class="form-control" id="reason" value={reason} 
                onChange={ e => onChange("reason", e.target.value) } />
        </div>

        <div class="form-group">
            <label for="aut">Patient:</label>
             <input type="patient_id_id" class="form-control" id="pat" value={patient_id_id} 
                onChange={ e => onChange("patient_id_id", e.target.value) } />
        </div>

            <button type="button" class="btn btn-primary" onClick={onCreate}>Create!</button>
        </div>
    </div>
    </div>
);

export default CreateAppointment;