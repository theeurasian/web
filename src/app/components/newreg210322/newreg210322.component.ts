import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-newreg210322',
  templateUrl: './newreg210322.component.html',
  styleUrls: ['./newreg210322.component.css']
})
export class Newreg210322Component implements OnInit {

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
