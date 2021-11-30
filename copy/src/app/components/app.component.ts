import { Component } from '@angular/core';
import {WebSocketManagerService} from '../domain/websocket/web-socket-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Eurasian';
  constructor(private ws: WebSocketManagerService) {
  }
}
