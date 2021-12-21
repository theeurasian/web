import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {LangService} from '../../domain/lang/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public lang: LangService, public device: DeviceDetectorService) { }

  ngOnInit(): void {

  }

  openLink(s: string) {
    window.open(s, '_blank');
  }

  openSMI() {
    if (this.lang.language == 'ru'){
      this.openLink('/assets/home/contacts/Свидетельство СМИ RU.pdf');
    }
    else if (this.lang.language == 'kz'){
      this.openLink('/assets/home/contacts/Свидетельство СМИ KZ.pdf');
    }
    else{
      this.openLink('/assets/home/contacts/Свидетельство СМИ RU-KZ.pdf');
    }
  }
}
