import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.css']
})
export class CertComponent implements OnInit {

  constructor(public device: DeviceDetectorService) { }

  ngOnInit(): void {
  }

}
