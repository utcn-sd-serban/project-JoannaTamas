package ro.utcn.sd.project.persistance.api;

import ro.utcn.sd.project.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientRepository {

    Patient save(Patient user);

    List<Patient> findAll();

    Optional<Patient> findById(int id);

    Patient findByName(String username);
}
