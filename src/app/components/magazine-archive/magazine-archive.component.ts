import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {LangService} from "../../domain/lang/lang.service";

@Component({
  selector: 'app-magazine-archive',
  templateUrl: './magazine-archive.component.html',
  styleUrls: ['./magazine-archive.component.css']
})
export class MagazineArchiveComponent implements OnInit {

  publishes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reverse();


  constructor(public device: DeviceDetectorService, public lang: LangService) { }

  ngOnInit(): void {
  }

  getThumbMargin(i: number) {
    if (!this.device.isMobile()){
      return{
        'margin-top': (~~(i / 8) * -100) + 'px'
      }
    }
    else{
      return{
        'margin-top': (~~(i / 5) * -10) + 'px'
      }
    }
  }
  openPublish(number: any) {
    let lang = this.getPublishLang();
    if (number == 15){
      if (!this.device.isMobile()){
        window.open('/pdf-view?pdf=' + `assets/publishes/${number}/ru-desktop.pdf`, '_blank');
      }
      else{
        window.open('/pdf-view?pdf=' + `assets/publishes/${number}/ru-mobile.pdf`, '_blank');
        //window.open(`assets/publishes/${number}/ru-mobile.pdf`, '_blank');
      }
    }
    else if (number == 14){
      window.open('https://eurasian.press/publishes/14/' + lang + '-' + 'desktop' + '.pdf');
    }
    else{
      window.open('https://eurasian.press/#/read?issue=' + number + '&lang=' + lang, '_blank');
    }
  }
  getPublishLang() {
    let lang = 'ru';
    if (this.lang.language == 'kz'){
      lang = 'kz';
    }
    return lang;
  }

}
