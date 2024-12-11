import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: `rooms-list.component.html`,
  styleUrls: ['rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  rooms: RoomList[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // this.rooms = this.roomsService.getRooms();
    this.roomsService.getRooms().subscribe(room => {
      this.rooms = room;
      });
  }
}
