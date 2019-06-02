package ro.utcn.sd.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import ro.utcn.sd.project.dto.AppointmentDTO;
import ro.utcn.sd.project.exception.AppointmentNotFoundException;
import ro.utcn.sd.project.model.Appointment;
import ro.utcn.sd.project.persistance.api.AppointmentRepository;
import ro.utcn.sd.project.persistance.api.RepositoryFactory;


import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Service
@RequiredArgsConstructor
public class AppointmentManagementService {
    private final RepositoryFactory repositoryFactory;

    /*
        @Transactional
        public AppointmentDTO addAppointment(AppointmentDTO dto) {
            Appointment appointment = new Appointment();
            appointment.setId(dto.getId());
            appointment.setDate(dto.getDate());
            appointment.setReason(dto.getReason());
            appointment.setIdPatient(repositoryFactory.createPatientRepository().findByName(dto.getPatient()));
            AppointmentDTO output = AppointmentDTO.ofEntity(repositoryFactory.createAppointmentRepository().save(appointment));

            return output;


        }
        */
    @Transactional
    public List<AppointmentDTO> listAppointmentsDTO() {
        return repositoryFactory.createAppointmentRepository().findAll().stream()
                .map(this::updateUserOfQuestion)
                .map(AppointmentDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public Appointment updateUserOfQuestion(Appointment appointment) {
        appointment.setIdPatient(repositoryFactory.createPatientRepository().findById(appointment.getIdPatient().getId()).get());
        return appointment;

    }

    @Transactional
    public Appointment addAppointment(Appointment appointment){
        return repositoryFactory.createAppointmentRepository().save(appointment);
    }


    @Transactional
    public void removeAppointment(int id) {
        AppointmentRepository repository = repositoryFactory.createAppointmentRepository();
        Appointment appointment = repository.findById(id).orElseThrow(AppointmentNotFoundException::new);
        repository.remove(appointment);
    }

}
