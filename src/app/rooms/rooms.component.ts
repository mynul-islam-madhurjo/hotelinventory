import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import {RoomList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: `rooms.component.html`,
  styleUrls: ['rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  roomsList: RoomList[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // this.rooms = this.roomsService.getRooms();
    this.roomsService.getRooms().subscribe(room => {
      this.roomsList= room;
    });
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
