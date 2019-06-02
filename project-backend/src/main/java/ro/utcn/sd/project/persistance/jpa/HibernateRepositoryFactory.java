package ro.utcn.sd.project.persistance.jpa;


import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import ro.utcn.sd.project.model.Appointment;
import ro.utcn.sd.project.persistance.api.AppointmentRepository;
import ro.utcn.sd.project.persistance.api.PatientRepository;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;


import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class HibernateRepositoryFactory implements RepositoryFactory {
    private final EntityManager entityManager;


    @Override
    public PatientRepository createPatientRepository() {
        return new HibernatePatientRepository(entityManager);
    }

    @Override
    public AppointmentRepository createAppointmentRepository() {
        return new HibernateAppointmentRepository(entityManager);
    }
}