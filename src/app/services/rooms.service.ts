import { Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private rooms: Room = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 30,
  };

  private roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: "Deluxe",
      amenities: "WiFi, TV, Mini Bar",
      price: 120,
      checkedInTime: new Date("2024-12-01T14:00:00"),
      checkedOutTime: new Date("2024-12-03T11:00:00"),
    },
    {
      roomNumber: 102,
      roomType: "Suite",
      amenities: "WiFi, TV, Mini Bar, Jacuzzi",
      price: 200,
      checkedInTime: new Date("2024-12-02T16:00:00"),
      checkedOutTime: new Date("2024-12-04T12:00:00"),
    },
    {
      roomNumber: 103,
      roomType: "Standard",
      amenities: "WiFi, TV",
      price: 80,
      checkedInTime: new Date("2024-12-03T14:00:00"),
      checkedOutTime: new Date("2024-12-05T11:00:00"),
    },
    {
      roomNumber: 104,
      roomType: "Deluxe",
      amenities: "WiFi, TV, Mini Bar",
      price: 120,
      checkedInTime: new Date("2024-12-01T12:00:00"),
      checkedOutTime: new Date("2024-12-02T11:00:00"),
    },
    {
      roomNumber: 105,
      roomType: "Suite",
      amenities: "WiFi, TV, Mini Bar, Balcony",
      price: 250,
      checkedInTime: new Date("2024-12-01T14:00:00"),
      checkedOutTime: new Date("2024-12-02T11:00:00"),
    },
  ];

  getRooms(): RoomList[] {
    return this.roomList;
  }
}
