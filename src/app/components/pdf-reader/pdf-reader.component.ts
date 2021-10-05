import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WSCmd} from '../../domain/websocket/structure/wscmd';
import {ActivatedRoute} from '@angular/router';
import {fromEvent} from 'rxjs';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {

  constructor(private device: DeviceDetectorService, private route: ActivatedRoute) { }

  rootPublishesSite = 'https://data-eurasian.ru/publishes/';
  //rootPublishesSite = 'assets/test/';

  pdfReading = 11;
  lang = '';
  qrs = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [3, 4, 32, 35, 87, 107, 114],
    [2, 3, 15, 21, 44, 94, 102, 113, 117],
    [2, 3, 11, 18, 37, 44, 49, 59, 67, 74, 82, 102],
    [1, 2, 3, 4, 6, 8, 10, 11, 32, 42, 46, 75, 83, 103, 110, 111, 115, 125, 134, 135],
    [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 22, 35, 83, 91, 96, 101, 109, 129, 136, 162]
  ];
  qrsKz = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [3, 4, 26, 28, 35, 41, 45, 74, 82, 102, 109, 110, 114, 124, 132, 133],
    [1, 2, 3, 7, 8, 19, 67, 80, 85, 93, 113, 120]
  ]
  images = [];
  publishes = [
    [1, 164],
    [2, 204],
    [3, 184],
    [4, 296],
    [5, 164],
    [6, 67],
    [7, 157],
    [8, 137],
    [9, 129],
    [10, 111],
    [11, 135],
    [12, 163]
  ];
  publishesKz = [
    [9, 129],
    [11, 133],
    [12, 147]
  ]

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.lang = params['lang'] != null ? params['lang'] : 'ru';
      this.pdfReading = params['issue'] != null ? +params['issue'] : 11;
    });
    this.images = this.getImages();
  }
  getPagesCount(numb: number, eng: boolean = false){
    let find = (this.lang == 'kz') ? this.publishesKz.find(x => x[0] === numb) : this.publishes.find(x => x[0] === numb);
    if (find == null && eng){
      find = this.publishes.find(x => x[0] === numb);
    }
    if (find != null){
      return find[1];
    }
    if (find == null){
      return 0;
    }
  }
  getImages(){
    const result = [];
    if (this.device.isMobile()){
      if (this.lang == 'kz' && this.getPagesCount(this.pdfReading) != 0){
        const pagesLocation = this.rootPublishesSite + this.pdfReading + '/pages-kz/Page';
        for (let x = 1; x <= this.getPagesCount(this.pdfReading); x++){
          result.push(pagesLocation + x + '.jpg');
        }
      }
      else{
        const pagesLocation = this.rootPublishesSite + this.pdfReading + '/pages-ru/Page';
        for (let x = 1; x <= this.getPagesCount(this.pdfReading, true); x++){
          result.push(pagesLocation + x + '.jpg');
        }
      }
    }
    else{
      if (this.lang == 'kz' && this.getPagesCount(this.pdfReading) != 0){
        const pagesLocation = this.rootPublishesSite + this.pdfReading + '/svg-pages-kz/Page-';
        for (let x = 1; x <= this.getPagesCount(this.pdfReading); x++){
          result.push(pagesLocation + x + '.svg');
        }
      }
      else{
        const pagesLocation = this.rootPublishesSite + this.pdfReading + '/svg-pages-ru/Page-';
        for (let x = 1; x <= this.getPagesCount(this.pdfReading, true); x++){
          result.push(pagesLocation + x + '.svg');
        }
      }
    }
    return result;
  }

  isQR(issue: number, ind: number) {
    const page = ind + 1;
    return this.lang == 'ru' && this.pdfReading === issue && this.qrs[this.pdfReading - 1].includes(page);
  }
  isQRKz(issue: number, ind: number) {
    const page = ind + 1;
    return this.lang == 'kz' && this.pdfReading === issue && this.qrsKz[this.pdfReading - 1].includes(page);
  }
  isQRE(ind: number) {
    const page = ind + 1;
    return this.pdfReading === 10 && page === 3;
  }
  openPBP() {
    window.open('https://yapbp.org', '_blank');
  }
  openPromo() {
    window.open('http://www.eurasian.press', '_blank');
  }
  hideMask(ind: number) {
    const page = ind + 1;
    const e = [];
    e.push(this.pdfReading === 10 && page === 2);
    e.push(this.pdfReading === 9 && page === 2);
    e.push(this.pdfReading === 9 && page === 117);
    return e.some(x => x === true);
  }
  openQr11(ind: number, lang: string){
    const page = ind + 1;
    switch (this.pdfReading){
      case 11: {
        switch (page) {
          case 3: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=snr24_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=snr24_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=snr24_en', '_blank');
                break;
              }
            }
            break;
          }
          case 4: {
            switch (lang) {
              case 'cn': {
                window.open('https://eurasian.press/#/g-cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://eurasian.press/#/g-en', '_blank');
                break;
              }
            }
            break;
          }
          case 6: {
            switch (lang) {
              case 'ru': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_en', '_blank');
                break;
              }
            }
            break;
          }
          case 8: {
            switch (lang) {
              case 'ru': {
                window.open('http://я.tv/#/watch?video=robots_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('http://я.tv/#/watch?video=robots_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('http://я.tv/#/watch?video=robots_en', '_blank');
                break;
              }
            }
            break;
          }
          case 9: {
            switch (lang) {
              case 'ru': {
                window.open('http://я.tv/#/watch?video=robots_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('http://я.tv/#/watch?video=robots_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('http://я.tv/#/watch?video=robots_en', '_blank');
                break;
              }
            }
            break;
          }
          case 10: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=mindf_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=mindf_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=mindf_en', '_blank');
                break;
              }
            }
            break;
          }
          case 32: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=kk_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=kk_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=kk_en', '_blank');
                break;
              }
            }
            break;
          }
          case 42: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww1_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww1_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww1_en', '_blank');
                break;
              }
            }
            break;
          }
          case 46: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww2_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww2_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww2_en', '_blank');
                break;
              }
            }
            break;
          }
          case 75: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww3_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww3_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww3_en', '_blank');
                break;
              }
            }
            break;
          }
          case 83: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww4_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww4_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww4_en', '_blank');
                break;
              }
            }
            break;
          }
          case 110: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww5_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww5_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww5_en', '_blank');
                break;
              }
            }
            break;
          }
          case 111: {
            switch (lang) {
              case 'ru': {
                window.open('http://я.tv/#/watch?video=galanz_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('http://я.tv/#/watch?video=galanz_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('http://я.tv/#/watch?video=galanz_en', '_blank');
                break;
              }
            }
            break;
          }
          case 115: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww6_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww6_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww6_en', '_blank');
                break;
              }
            }
            break;
          }
          case 125: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww7_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww7_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww7_en', '_blank');
                break;
              }
            }
            break;
          }

        }
        break;
      }
    }
  }
  openQr11Kz(ind: number, lang: string){
    const page = ind + 1;
    switch (this.pdfReading){
      case 11: {
        switch (page) {
          case 3: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=unfor_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=unfor_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=unfor_en', '_blank');
                break;
              }
            }
            break;
          }
          case 4: {
            switch (lang) {
              case 'cn': {
                window.open('https://eurasian.press/#/g-cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://eurasian.press/#/g-en', '_blank');
                break;
              }
            }
            break;
          }
          case 26: {
            switch (lang) {
              case 'ru': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://xn--41a.tv/#/watch?video=allrum_en', '_blank');
                break;
              }
            }
            break;
          }
          case 28: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=kk_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=kk_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=kk_en', '_blank');
                break;
              }
            }
            break;
          }
          case 35: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=mindf_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=mindf_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=mindf_en', '_blank');
                break;
              }
            }
            break;
          }
          case 41: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww1_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww1_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww1_en', '_blank');
                break;
              }
            }
            break;
          }
          case 45: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww2_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww2_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww2_en', '_blank');
                break;
              }
            }
            break;
          }
          case 74: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww3_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww3_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww3_en', '_blank');
                break;
              }
            }
            break;
          }
          case 82: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww4_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww4_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww4_en', '_blank');
                break;
              }
            }
            break;
          }
          case 109: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww5_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww5_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww5_en', '_blank');
                break;
              }
            }
            break;
          }
          case 110: {
            switch (lang) {
              case 'ru': {
                window.open('http://я.tv/#/watch?video=galanz_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('http://я.tv/#/watch?video=galanz_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('http://я.tv/#/watch?video=galanz_en', '_blank');
                break;
              }
            }
            break;
          }
          case 114: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww6_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww6_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww6_en', '_blank');
                break;
              }
            }
            break;
          }
          case 124: {
            switch (lang) {
              case 'ru': {
                window.open('https://я.tv/#/watch?video=ww7_ru', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=ww7_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=ww7_en', '_blank');
                break;
              }
            }
            break;
          }

        }
        break;
      }
    }
  }

  openQr10(ind: number, lang: string){
    const page = ind + 1;
    switch (this.pdfReading){
      case 10: {
        switch (page) {
          case 3: {
            switch (lang) {
              case 'ru': {
                window.open('https://www.youtube.com/watch?v=qxDrQGoMtEM', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=shh_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=shh_en', '_blank');
                break;
              }
            }
            break;
          }
          case 11: {
            switch (lang) {
              case 'ru': {
                window.open('https://www.youtube.com/watch?v=DrqFQPNz2J4', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=chdr_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=chdr_en', '_blank');
                break;
              }
            }
            break;
          }
          case 18: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805151040-vf2t.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://xn--41a.tv/#/watch?video=10_1_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://xn--41a.tv/#/watch?video=10_1_en', '_blank');
                break;
              }
            }
            break;
          }
          case 37: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805161027-ur9x.htm', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_2_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_2_en', '_blank');
                break;
              }
            }
            break;
          }
          case 44: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805171024-hhdt.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_3_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_3_en', '_blank');
                break;
              }
            }
            break;
          }
          case 49: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805181036-tjx8.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_4_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_4_en', '_blank');
                break;
              }
            }
            break;
          }
          case 59: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805221036-8z7w.htm', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_5_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_5_en', '_blank');
                break;
              }
            }
            break;
          }
          case 67: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805231040-c9gr.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_6_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_6_en', '_blank');
                break;
              }
            }
            break;
          }
          case 74: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805251026-tf8x.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_7_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_7_en', '_blank');
                break;
              }
            }
            break;
          }
          case 82: {
            switch (lang){
              case 'ru': {
                window.open('https://tvzvezda.ru/schedule/films-online/201805251039-k4t5.htm/', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=10_8_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=10_8_en', '_blank');
                break;
              }
            }
            break;
          }
          case 102: {
            switch (lang){
              case 'ru': {
                window.open('https://www.youtube.com/watch?v=UWxeVyXqgLs', '_blank');
                break;
              }
              case 'cn': {
                window.open('https://я.tv/#/watch?video=wsbs_cn', '_blank');
                break;
              }
              case 'en': {
                window.open('https://я.tv/#/watch?video=wsbs_en', '_blank');
                break;
              }
            }
            break;
          }
        }
      }
    }
  }
  openQr9(ind: number) {
    const page = ind + 1;
    switch (page){
      case 3: {
        window.open('http://kremlin.ru/events/president/transcripts/statements/64447/videos#', '_blank');
        break;
      }
      case 15: {
        window.open('https://youtu.be/60In5DUEXAQ', '_blank');
        break;
      }
      case 21: {
        window.open('https://xn--41a.tv/#/watch?video=voina_i_mif_21_titr_eng-00_x264.mp4', '_blank');
        break;
      }
      case 44: {
        window.open('https://www.ntv.ru/video/1969601/#ts=12', '_blank');
        break;
      }
      case 94: {
        window.open('https://youtu.be/8HZ4DnVfWYQ', '_blank');
        break;
      }
      case 102: {
        window.open('https://www.globalprice.info/?p=statistics/bigmac', '_blank');
        break;
      }
      case 113: {
        window.open('https://youtu.be/v1NBNioUzME', '_blank');
        break;
      }
    }
  }
  openPromoQr(url: string) {
    window.open(url, '_blank');
  }
}
