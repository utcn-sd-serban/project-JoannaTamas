package ro.utcn.sd.project.Seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.project.model.Patient;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;
import ro.utcn.sd.project.service.PatientUserDetailsService;

@Component
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE)
public class UserSeed implements CommandLineRunner {
    private final RepositoryFactory repository;
    private final PasswordEncoder passwordEncoder;
    private final PatientUserDetailsService service;
    @Override
    @Transactional
    public void run(String... args) throws Exception{

       // Patient user1 = new Patient(3, "john", passwordEncoder.encode("pass"),111);
       // patientRepository.createPatientRepository().save(user1);



        //System.out.println(user1.getPassword());
       //Patient user = repository.createPatientRepository().findById(2).get();
       // System.out.println("user: "+user.getUsername());
        System.out.println("YOU ARE HERE "+  service.loadUserByUsername("ioana").getPassword());
    }

    @Transactional
    public void clear() {


    }
}