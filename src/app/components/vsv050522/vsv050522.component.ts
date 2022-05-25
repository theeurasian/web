import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-vsv050522',
  templateUrl: './vsv050522.component.html',
  styleUrls: ['./vsv050522.component.css']
})
export class Vsv050522Component implements OnInit {

  constructor(public device: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  open(url: string) {
    window.open(url, '_blank');
  }

  openLogo() {
    window.open('https://eurasian.press', '_blank');
  }

  getVideoStyle() {
    if (this.device.isMobile()){
      return{
        width: '80%'
      };
    }
    else{
      return {
        width: '60%'
      };
    }
  }
}
