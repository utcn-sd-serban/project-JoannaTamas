package ro.utcn.sd.project.event;

import lombok.Data;

@Data
public class BaseEvent {
    private final EventType type;
}
