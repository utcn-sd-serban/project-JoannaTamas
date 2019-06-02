package ro.utcn.sd.project.persistance.jpa;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Component;
import ro.utcn.sd.project.model.Patient;
import ro.utcn.sd.project.persistance.api.PatientRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class HibernatePatientRepository implements PatientRepository {
    private final EntityManager entityManager;


    @Override
    public Patient save(Patient user) {
        if (user.getId() == null) {
            entityManager.persist(user);
            return user;
        } else {
            return entityManager.merge(user);
        }
    }

    @Override
    public List<Patient> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Patient> query = builder.createQuery(Patient.class);
        query.select(query.from(Patient.class));
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    public Optional<Patient> findById(int id) {

        return Optional.ofNullable(entityManager.find(Patient.class, id));
    }

    @Override
    public Patient findByName(String username) {

        return entityManager.find(Patient.class,username);
    }


}