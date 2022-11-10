import {Component, OnInit} from '@angular/core';
import {WebSocketManagerService} from '../domain/websocket/web-socket-manager.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Eurasian';
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!!event.url && event.url.match(/^\/#/)) {
          this.router.navigate([event.url.replace('/#', '')]);
        }
      }
    });
  }
}
