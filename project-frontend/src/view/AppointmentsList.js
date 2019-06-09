import React from "react";

const AppointmentsList = ({ appointments, onDelete }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >All the appointments</h1>

       
         <table class="table table-bordered">
         <thead>
            <tr class="table-primary">
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Patient</th>

              
                    
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) => (
                        <tr class="table-light" key={index}>
                            <td>{appointment.date}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.patient_id_id}</td>
                            <td> <button className="button muted-button" onClick={() => onDelete(index)}>Delete</button> </td>
                         
                          
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
       
    </div>
    </div>
    </div>
    
);

export default AppointmentsList;