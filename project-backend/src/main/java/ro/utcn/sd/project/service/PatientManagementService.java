package ro.utcn.sd.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import ro.utcn.sd.project.model.Patient;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;

import javax.transaction.Transactional;
import java.util.Optional;


@Component
@Service
@RequiredArgsConstructor
public class PatientManagementService {


    private RepositoryFactory repositoryFactory;

    @Transactional
    public Patient findByUsername(String username) {
        return repositoryFactory.createPatientRepository().findById(1).get();

    }

    @Transactional
    public Optional<Patient> findById(int id) {
        return repositoryFactory.createPatientRepository().findById(id);

    }

}
