import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {LangService} from '../../domain/lang/lang.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public device: DeviceDetectorService, public lang: LangService) { }

  ngOnInit(): void {
  }

}
