import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-pcf120422',
  templateUrl: './pcf120422.component.html',
  styleUrls: ['./pcf120422.component.css']
})
export class Pcf120422Component implements OnInit {

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
