export type EventType = "new-year" | "summer" | "custom";
export type StaticEventType = Exclude<EventType, "custom">;
