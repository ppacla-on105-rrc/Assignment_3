import { Event } from "../models/Event";
import * as repo from "../repositories/eventRepository";

export const createEvent = async (event: Event): Promise<Event> => {
  return repo.createEvent(event);
};

export const getAllEvents = async (): Promise<Event[]> => {
  return repo.getAllEvents();
};

export const getEventById = async (id: string): Promise<Event | null> => {
  return repo.getEventById(id);
};

export const updateEvent = async (
  id: string,
  updates: Partial<Event>
): Promise<Event | null> => {
  return repo.updateEvent(id, updates);
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  return repo.deleteEvent(id);
};