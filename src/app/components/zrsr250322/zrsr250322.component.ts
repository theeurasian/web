import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-zrsr250322',
  templateUrl: './zrsr250322.component.html',
  styleUrls: ['./zrsr250322.component.css']
})
export class Zrsr250322Component implements OnInit {
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
