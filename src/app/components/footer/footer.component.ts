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
}
