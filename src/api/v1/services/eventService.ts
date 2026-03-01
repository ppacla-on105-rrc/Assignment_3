import { Event } from "../models/Event";
import { saveEvent, getAllEvents } from "../repositories/eventRepository";

export const createEvent = (data: Event): Event => {
  const now = new Date().toISOString();

  const event: Event = {
    ...data,
    id: `evt_${Date.now()}`,
    createdAt: now,
    updatedAt: now
  };

  return saveEvent(event);
};

export const fetchAllEvents = (): Event[] => {
  return getAllEvents();
};