package ro.utcn.sd.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import ro.utcn.sd.project.model.Patient;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;

import javax.transaction.Transactional;
import java.util.Collections;

@Service
@RequiredArgsConstructor
public class PatientUserDetailsService implements UserDetailsService {

    private final RepositoryFactory repository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Patient user = repository.createPatientRepository().findById(2).get();

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_PATIENT")));

    }


    @Transactional
    public Patient loadCurrentUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.createPatientRepository().findById(2).get();


    }
}