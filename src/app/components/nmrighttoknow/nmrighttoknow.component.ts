import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-nmrighttoknow',
  templateUrl: './nmrighttoknow.component.html',
  styleUrls: ['./nmrighttoknow.component.css']
})
export class NmrighttoknowComponent implements OnInit {

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
