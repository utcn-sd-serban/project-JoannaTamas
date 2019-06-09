package ro.utcn.sd.project.dto;

import lombok.Data;
import ro.utcn.sd.project.model.Appointment;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;

import java.sql.Timestamp;

@Data
public class AppointmentDTO {
    private Integer id;
    private Timestamp date;
    private String reason;
    private int patient_id_id;

    private static RepositoryFactory repository;

    public static AppointmentDTO ofEntity(Appointment appointment) {

        AppointmentDTO appointmentDTO = new AppointmentDTO();

        appointmentDTO.setId(appointment.getId());
        appointmentDTO.setDate(appointment.getDate());
        appointmentDTO.setReason(appointment.getReason());
        appointmentDTO.setPatient_id_id(appointment.getPatient_id().getId());

        return appointmentDTO;
    }


}