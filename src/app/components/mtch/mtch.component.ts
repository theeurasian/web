import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-mtch',
  templateUrl: './mtch.component.html',
  styleUrls: ['./mtch.component.css']
})
export class MtchComponent implements OnInit {

  constructor(private device: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  open(lang: string) {
    switch (lang) {
      case 'en':{
        window.open('https://xn--41a.tv/#/watch?video=m-t_en', '_blank');
        break;
      }
      case 'cn':{
        window.open('https://xn--41a.tv/#/watch?video=m-t_cn', '_blank');
        break;
      }
      default:{
        window.open('https://youtu.be/Alpfq2Q8SZI', '_blank');
        break;
      }
    }
  }

  openLogo() {
    window.open('https://eurasian.press', '_blank');
  }
}
