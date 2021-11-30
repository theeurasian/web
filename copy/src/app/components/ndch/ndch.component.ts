import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ndch',
  templateUrl: './ndch.component.html',
  styleUrls: ['./ndch.component.css']
})
export class NdchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open1(lang: string) {
    switch (lang) {
      case 'en':{
        window.open('https://xn--41a.tv/#/watch?video=ndp1_en', '_blank');
        break;
      }
      case 'cn':{
        window.open('https://xn--41a.tv/#/watch?video=ndp1_cn', '_blank');
        break;
      }
      default:{
        window.open('https://xn--41a.tv/#/watch?video=ndp1_ru', '_blank');
        break;
      }
    }
  }
  open2(lang: string) {
    switch (lang) {
      case 'en':{
        window.open('https://xn--41a.tv/#/watch?video=ndp2_en', '_blank');
        break;
      }
      case 'cn':{
        window.open('https://xn--41a.tv/#/watch?video=ndp2_cn', '_blank');
        break;
      }
      default:{
        window.open('https://xn--41a.tv/#/watch?video=ndp2_ru', '_blank');
        break;
      }
    }
  }
  openLogo() {
    window.open('https://eurasian.press', '_blank');
  }
}
