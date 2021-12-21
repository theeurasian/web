import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-bcalledexam',
  templateUrl: './bcalledexam.component.html',
  styleUrls: ['./bcalledexam.component.css']
})
export class BcalledexamComponent implements OnInit {


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
