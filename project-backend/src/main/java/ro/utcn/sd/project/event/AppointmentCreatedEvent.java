package ro.utcn.sd.project.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.sd.project.dto.AppointmentDTO;
import ro.utcn.sd.project.model.Appointment;

@Data
@EqualsAndHashCode(callSuper = true)
public class AppointmentCreatedEvent extends BaseEvent{
    private final AppointmentDTO appointmentDTO;

    public AppointmentCreatedEvent(AppointmentDTO appointmentDTO) {
        super(EventType.APPOINTMENT_CREATED );
        this.appointmentDTO = appointmentDTO;
    }
}
