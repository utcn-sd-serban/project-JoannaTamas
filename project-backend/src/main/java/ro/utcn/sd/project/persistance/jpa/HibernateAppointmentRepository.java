package ro.utcn.sd.project.persistance.jpa;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ro.utcn.sd.project.model.Appointment;
import ro.utcn.sd.project.persistance.api.AppointmentRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class HibernateAppointmentRepository implements AppointmentRepository {
    private final EntityManager entityManager;


    @Override
    public List<Appointment> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Appointment> query = builder.createQuery(Appointment.class);
        query.select(query.from(Appointment.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Appointment save(Appointment appointment) {
        if (appointment.getId() == null) {
            entityManager.persist(appointment);
            return appointment;
        } else {
            return entityManager.merge(appointment);
        }
    }

    @Override
    public void remove(Appointment appointment) {
        entityManager.remove(appointment);

    }

    @Override
    public Optional<Appointment> findById(int id) {
        return Optional.empty();
    }
}
