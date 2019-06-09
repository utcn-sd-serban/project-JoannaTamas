package ro.utcn.sd.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Timestamp;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString(of = {"id", "date", "reason", "patient_id"})
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Timestamp date;
    private String reason;

    // private Integer idDentist;

    @OneToOne
    @JoinColumn
    private Patient patient_id;


    public Appointment(Timestamp dateTime, String reason, Patient id) {
        this.date = dateTime;
        this.reason = reason;
        this.patient_id = id;
    }
}
