import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-meetrfandkz',
  templateUrl: './meetrfandkz.component.html',
  styleUrls: ['./meetrfandkz.component.css']
})
export class MeetrfandkzComponent implements OnInit {

  constructor(private device: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  open(url: string) {
    window.open(url, '_blank');
  }

  openLogo() {
    window.open('https://eurasian.press', '_blank');
  }
}
