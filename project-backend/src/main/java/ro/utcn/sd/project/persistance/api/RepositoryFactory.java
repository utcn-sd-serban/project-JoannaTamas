package ro.utcn.sd.project.persistance.api;


public interface RepositoryFactory {

    PatientRepository createPatientRepository();

    AppointmentRepository createAppointmentRepository();
}
