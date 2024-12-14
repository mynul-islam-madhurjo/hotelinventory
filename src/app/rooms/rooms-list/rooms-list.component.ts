import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../../services/rooms.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-rooms-list',
  templateUrl: `rooms-list.component.html`,
  styleUrls: ['rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  // rooms: RoomList[] = [];
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
