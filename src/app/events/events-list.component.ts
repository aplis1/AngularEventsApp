import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'event-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events:any[];

constructor(private eventService: EventService) {
}

ngOnInit() {
console.log("ngOnInit()")
  this.events = this.eventService.getEvents();
}

}