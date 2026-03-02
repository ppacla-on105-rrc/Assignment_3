import * as eventService from "../src/api/v1/services/eventService";
import * as eventRepo from "../src/api/v1/repositories/eventRepository";
import { Event } from "../src/api/v1/models/Event";

jest.mock("../src/api/v1/repositories/eventRepository", () => ({
  createEvent: jest.fn(),
  getAllEvents: jest.fn(),
  getEventById: jest.fn(),
  updateEvent: jest.fn(),
  deleteEvent: jest.fn(),
}));

const mockedRepo = eventRepo as jest.Mocked<typeof eventRepo>;

describe("eventService", () => {
  it("should create an event using the repository", async () => {
    // Arrange
    const newEvent: Event = {
      id: "evt_test_1",
      name: "Test Event",
      date: "2027-12-25T09:00:00.000Z",
      capacity: 200,
      registrationCount: 0,
      status: "active",
      category: "general",
    };

    mockedRepo.createEvent.mockResolvedValue(newEvent);

    // Act
    const result = await eventService.createEvent(newEvent);

    // Assert
    expect(mockedRepo.createEvent).toHaveBeenCalledTimes(1);
    expect(mockedRepo.createEvent).toHaveBeenCalledWith(newEvent);
    expect(result).toEqual(newEvent);
  });

  it("should return all events from the repository", async () => {
    // Arrange
    const events: Event[] = [
      {
        id: "evt_test_2",
        name: "Event 2",
        date: "2027-12-26T09:00:00.000Z",
        capacity: 150,
        registrationCount: 0,
        status: "active",
        category: "general",
      },
    ];

    mockedRepo.getAllEvents.mockResolvedValue(events);

    // Act
    const result = await eventService.getAllEvents();

    // Assert
    expect(mockedRepo.getAllEvents).toHaveBeenCalledTimes(1);
    expect(result).toEqual(events);
  });

  it("should return one event by id from the repository", async () => {
    // Arrange
    const event: Event = {
      id: "evt_test_3",
      name: "Event 3",
      date: "2027-12-27T09:00:00.000Z",
      capacity: 100,
      registrationCount: 0,
      status: "active",
      category: "general",
    };

    mockedRepo.getEventById.mockResolvedValue(event);

    // Act
    const result = await eventService.getEventById("evt_test_3");

    // Assert
    expect(mockedRepo.getEventById).toHaveBeenCalledTimes(1);
    expect(mockedRepo.getEventById).toHaveBeenCalledWith("evt_test_3");
    expect(result).toEqual(event);
  });

  it("should update an event using the repository", async () => {
    // Arrange
    const updates: Partial<Event> = { capacity: 999 };

    const updatedEvent: Event = {
      id: "evt_test_4",
      name: "Event 4",
      date: "2027-12-28T09:00:00.000Z",
      capacity: 999,
      registrationCount: 0,
      status: "active",
      category: "general",
    };

    mockedRepo.updateEvent.mockResolvedValue(updatedEvent);

    // Act
    const result = await eventService.updateEvent("evt_test_4", updates);

    // Assert
    expect(mockedRepo.updateEvent).toHaveBeenCalledTimes(1);
    expect(mockedRepo.updateEvent).toHaveBeenCalledWith("evt_test_4", updates);
    expect(result).toEqual(updatedEvent);
  });

  it("should delete an event using the repository", async () => {
    // Arrange
    mockedRepo.deleteEvent.mockResolvedValue(true);

    // Act
    const result = await eventService.deleteEvent("evt_test_5");

    // Assert
    expect(mockedRepo.deleteEvent).toHaveBeenCalledTimes(1);
    expect(mockedRepo.deleteEvent).toHaveBeenCalledWith("evt_test_5");
    expect(result).toBe(true);
  });
});