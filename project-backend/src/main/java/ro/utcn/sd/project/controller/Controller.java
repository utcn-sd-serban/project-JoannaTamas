package ro.utcn.sd.project.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import ro.utcn.sd.project.dto.AppointmentDTO;
import ro.utcn.sd.project.event.BaseEvent;
import ro.utcn.sd.project.service.AppointmentManagementService;

import java.util.List;


@Slf4j
@RestController
@RequiredArgsConstructor
public class Controller {
    // private final Scanner scanner = new Scanner(System.in);
    private final AppointmentManagementService ams;
    private final SimpMessagingTemplate messagingTemplate;


    @GetMapping("/appointments")
    public List<AppointmentDTO> readAll() {

        return ams.listAppointmentsDTO();
    }

    @DeleteMapping("/appointments/{id}")
    public void remove(@PathVariable int id) {
        ams.removeAppointment(id);
    }

    @PostMapping("/appointments")
    public AppointmentDTO create(@RequestBody AppointmentDTO dto) {
        return ams.addAppointmentDTO(dto);
    }

    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);

    }


}