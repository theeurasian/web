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
  openSMI() {
    if (this.lang.language == 'ru'){
      this.openLink('/assets/home/contacts/Свидетельство RU.pdf');
    }
    else if (this.lang.language == 'kz'){
      this.openLink('/assets/home/contacts/Свидетельство KZ.pdf');
    }
    else{
      this.openLink('/assets/home/contacts/Свидетельство RU.pdf');
      this.openLink('/assets/home/contacts/Свидетельство KZ.pdf');
    }
  }
  openLink(s: string) {
    window.open(s, '_blank');
  }
}
