package ro.utcn.sd.project.persistance.api;

import org.springframework.stereotype.Component;
import ro.utcn.sd.project.model.Appointment;

import java.util.List;
import java.util.Optional;


public interface AppointmentRepository {
    Appointment save(Appointment appointment);

    void remove(Appointment appointment);

    Optional<Appointment> findById(int id);

    List<Appointment> findAll();
}
