import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-wday22',
  templateUrl: './wday22.component.html',
  styleUrls: ['./wday22.component.css']
})
export class Wday22Component implements OnInit {

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
