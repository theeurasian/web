import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-temirtransserv',
  templateUrl: './temirtransserv.component.html',
  styleUrls: ['./temirtransserv.component.css']
})
export class TemirtransservComponent implements OnInit {
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
