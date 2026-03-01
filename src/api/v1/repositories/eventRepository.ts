import { Event } from "../models/Event";

let events: Event[] = [];

export const saveEvent = (event: Event): Event => {
  events.push(event);
  return event;
};

export const getAllEvents = (): Event[] => {
  return events;
};