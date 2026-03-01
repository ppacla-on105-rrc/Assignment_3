import { Event } from "../models/Event";

export const createEvent = (data: Event): Event => {
  const now = new Date().toISOString();

  return {
    ...data,
    id: `evt_${Date.now()}`,
    createdAt: now,
    updatedAt: now
  };
};