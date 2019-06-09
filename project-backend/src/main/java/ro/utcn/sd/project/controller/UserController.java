package ro.utcn.sd.project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.project.model.Patient;
import ro.utcn.sd.project.service.PatientUserDetailsService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final PatientUserDetailsService service;

    @GetMapping("/me")
    public Patient readCurrent() {
        return service.loadCurrentUser();


    }


}
