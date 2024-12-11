import { Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms/rooms';
import {HttpClient} from "@angular/common/http";

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
  ];

  constructor(private http: HttpClient) {
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
