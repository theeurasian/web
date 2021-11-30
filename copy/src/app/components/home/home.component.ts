import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NewsManagerService} from '../../domain/news/news-manager.service';
import {RssItem} from '../../domain/news/struct/rss-item';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import { get } from 'scriptjs';
import {WSCmd} from '../../domain/websocket/structure/wscmd';
import {WebSocketManagerService} from '../../domain/websocket/web-socket-manager.service';
import {ModalDirective} from 'angular-bootstrap-md';
import {Currency} from '../../domain/news/struct/currency';
import {NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {LangService} from '../../domain/lang/lang.service';
declare let L;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  screenHeight: number;
  screenWidth: number;
  map;
  marker;
  ratio;
  date = '';
  publishes = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).reverse();
  publishesKZ = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11-kz', '12-kz']).reverse();

  rssNews: RssItem[] = this.news.rssNews;
  currencyLoaded = false;

  usdtd;
  cnytd;
  kzttd;
  inrtd;
  byntd;
  eurtd;

  usdtm;
  cnytm;
  kzttm;
  inrtm;
  byntm;
  eurtm;

  rubtd;
  rubtm;

  hidden = true;

  tvs = [
    [ 'ontvtime_ort.jpg', 'https://www.ontvtime.ru/live/1tv.html' ],
    [ 'ontvtime_russia12.jpg', 'https://www.ontvtime.ru/live/russia1-tv.html' ],
    [ 'ontvtime_ntv11.jpg', 'https://youtu.be/ownZUMKmM4c' ],
    [ 'russiak_ontvtime1.jpg', 'https://www.ontvtime.ru/live/russiak-2.html' ],
    [ 'ontvtime_tv3_6.jpg', 'https://www.ontvtime.ru/general/tv3.html' ],
    [ 'russia24_ontvtime.jpg', 'https://youtu.be/8T9SFZDP60Q' ],
    [ 'ontvtime_tvc.jpg', 'https://www.ontvtime.ru/general/tvc.html' ],
    [ 'ontvtime_rentv.jpg', 'https://www.ontvtime.ru/general/rentv.html' ],
    [ 'ontvtime_tnt.jpg', 'https://www.ontvtime.ru/live/tnt.html' ],
    [ 'ontvtime_sts6.jpg', 'https://www.ontvtime.ru/live/sts3.html' ],
    [ 'zvezda.jpg', 'https://www.ontvtime.ru/live/zvezda.html' ],
    [ 'ontvtime_5channel.jpg', 'https://www.ontvtime.ru/general/channel5.html' ],
    [ 'ontvtime_karusel1.jpg', 'https://www.ontvtime.ru/live/karusel-2.html' ],
    [ 'ontvtime_otr.png', 'https://www.ontvtime.ru/live/otr.html' ],
    [ 'ontvtime_mir2.jpg', 'https://youtu.be/IFmp_DwfKAo' ],
    [ 'ontvtime_domashniy5.jpg', 'https://www.ontvtime.ru/general/domashniy.html' ],
    [ 'rbc_ontvtime.jpg', 'https://youtu.be/06jgCTFmLl4' ],
    [ 'che_ontvtime.jpg', 'https://www.ontvtime.ru/live/che.html' ],
    [ 'sts_love_ontvtime.jpg', 'https://www.ontvtime.ru/live/sts-love.html' ],
    [ 'spas_ontvtime.jpg', 'https://www.ontvtime.ru/live/spas.html' ],
    [ 'ontvtime_centralnoetv.jpg', 'https://www.ontvtime.ru/live/centralnoetv.html' ],
    [ 'indiatv.jpg', 'http://www.interntv.ru/index.php?name=View&idtv=2610' ],
    [ 'chinhua.jpg', 'http://russian.news.cn/' ],
    [ 'habar.jpg', 'https://khabar.kz/ru/programma/onlajn-translyatsiya' ],
    [ 'zeetv.jpg', 'https://tv.zee-tv.ru/' ],
    [ 'rt.jpg', 'https://www.rt.com/' ]
  ];
  tvs1 = [
    [ 'ontvtime_ort.jpg', 'https://www.ontvtime.ru/live/1tv.html' ],
    [ 'ontvtime_russia12.jpg', 'https://www.ontvtime.ru/live/russia1-tv.html' ],
    [ 'ontvtime_ntv11.jpg', 'https://youtu.be/ownZUMKmM4c' ],
    [ 'russiak_ontvtime1.jpg', 'https://www.ontvtime.ru/live/russiak-2.html' ],
    [ 'ontvtime_tv3_6.jpg', 'https://www.ontvtime.ru/general/tv3.html' ]
  ];
  tvs2 = [
    [ 'russia24_ontvtime.jpg', 'https://youtu.be/8T9SFZDP60Q' ],
    [ 'ontvtime_tvc.jpg', 'https://www.ontvtime.ru/general/tvc.html' ],
    [ 'ontvtime_rentv.jpg', 'https://www.ontvtime.ru/general/rentv.html' ],
    [ 'ontvtime_tnt.jpg', 'https://www.ontvtime.ru/live/tnt.html' ],
    [ 'ontvtime_sts6.jpg', 'https://www.ontvtime.ru/live/sts3.html' ]
  ];
  tvs3 = [
    [ 'zvezda.jpg', 'https://www.ontvtime.ru/live/zvezda.html' ],
    [ 'ontvtime_5channel.jpg', 'https://www.ontvtime.ru/general/channel5.html' ],
    [ 'ontvtime_karusel1.jpg', 'https://www.ontvtime.ru/live/karusel-2.html' ],
    [ 'ontvtime_otr.png', 'https://www.ontvtime.ru/live/otr.html' ],
    [ 'ontvtime_mir2.jpg', 'https://youtu.be/IFmp_DwfKAo' ]
  ];
  tvs4 = [
    [ 'ontvtime_domashniy5.jpg', 'https://www.ontvtime.ru/general/domashniy.html' ],
    [ 'rbc_ontvtime.jpg', 'https://youtu.be/06jgCTFmLl4' ],
    [ 'che_ontvtime.jpg', 'https://www.ontvtime.ru/live/che.html' ],
    [ 'sts_love_ontvtime.jpg', 'https://www.ontvtime.ru/live/sts-love.html' ],
    [ 'spas_ontvtime.jpg', 'https://www.ontvtime.ru/live/spas.html' ],
  ];
  tvs5 = [
    [ 'ontvtime_centralnoetv.jpg', 'https://www.ontvtime.ru/live/centralnoetv.html' ],
    [ 'indiatv.jpg', 'http://www.interntv.ru/index.php?name=View&idtv=2610' ],
    [ 'chinhua.jpg', 'http://russian.news.cn/' ],
    [ 'habar.jpg', 'https://khabar.kz/ru/programma/onlajn-translyatsiya' ],
    [ 'zeetv.jpg', 'https://tv.zee-tv.ru/' ],
    [ 'rt.jpg', 'https://www.rt.com/' ]
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  private months =
    [ "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сенября", "октября", "ноября", "декабря"
    ]

  private addLeftZeros(value: any, length = 2){
    let result = value.toString();
    while (result.length < length){
      result = "0" + result;
    }
    return result;
  }
  constructor(public languageManager: LangService, public lang: LangService, private elem: ElementRef, private ws: WebSocketManagerService, private route: ActivatedRoute, private news: NewsManagerService, private router: Router, public device: DeviceDetectorService) {
    this.getScreenSize();
  }
  getDate(){
    let dateTime = new Date();
    return dateTime.getDay() + " " + this.months[dateTime.getMonth()] + ", " + this.addLeftZeros(dateTime.getHours()) + ":" + this.addLeftZeros(dateTime.getMinutes())
  }
  @ViewChild('thank_you') thank_you;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryOptionsMobile: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  @ViewChild('gallery') gallery;
  ngOnInit(): void {
    this.galleryOptions = [
      { },
      { image: false, width: '1400px', height: '480px', imageAutoPlay: true, thumbnailsArrows: true, imageAutoPlayInterval: 1000, thumbnailsPercent: 100},
    ];
    this.galleryOptionsMobile = [
      { },
      { image: false, width: '300px', height: '400px', thumbnailsColumns: 1, imageAutoPlay: true, thumbnailsArrows: true, imageAutoPlayInterval: 1000, thumbnailsPercent: 100, imageSwipe: true},
    ];
    if (this.languageManager.language == 'kz'){
      for (let x = 1; x <= 6; x++){
        this.galleryImages.push(
          {
            small: 'assets/vr-kz/' + x + '.svg',
            medium: 'assets/vr-kz/' + x + '.svg',
            big: 'assets/vr-kz/' + x + '.svg',
          }
        )
      }
    }
    else{
      for (let x = 1; x <= 7; x++){
        this.galleryImages.push(
          {
            small: 'assets/vr/' + x + '.svg',
            medium: 'assets/vr/' + x + '.svg',
            big: 'assets/vr/' + x + '.svg',
          }
        )
      }
    }
    this.galleryImages = [...this.galleryImages];
    this.route
      .queryParams
      .subscribe(params => {
        if (params['id'] != null){
          let cmd = new WSCmd("commitPurchase", params['id']);
          if (!this.ws.isOpen()){
            this.ws.event.subscribe((event) => {
              if (event == 'open'){
                this.ws.send(cmd.toJson());
                this.thank_you.show();
              }
            });
          }
          else{
            this.ws.send(cmd.toJson());
          }
        }
      });
  }
  setRssNews(){
    this.rssNews.splice(0, this.rssNews.length);
    this.news.rssNews.forEach(rssItem => {
      this.rssNews.push(rssItem);
    });
  }

  ngAfterViewInit(): void {
    get("https://informers.forexpf.ru/php/cbrf.php?id=01345G", () => {
      this.currencyLoaded = true;
    });
    setInterval(() => {
      this.date = this.getDate();
    }, 1000);
  }

  selectJournal(number: number, lang = 'ru') {
    window.open('https://eurasian.press/#/read?issue=' + number.toString().replace('-kz', '') + '&lang=' + (number.toString().includes('kz') ? 'kz' : lang), '_blank');
  }
  openLastJournal(){
    window.open('https://eurasian.press/#/last-issue', '_blank');
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }

  centerText1() {
    return "Издание \"The Eurasian\" помогает читателям найти в средствах массовой информации идеологию простых и ясных мыслей Евразийства, понимание истории и экономики, общественного строительства и обороны. Мы предоставляем услуги по редактированию, оформлению и продвижению газет, журналов, сайтов, приложений и книг, изданных c \"The Eurasian\". Книги могут быть изданы в мягкой и твердой обложке. Напишите нам, чтобы узнать, как стать автором изданий «The Eurasian». \"The Eurasian\" - стиль, объективность и проевразийский формат с 29 мая 2014 года.";
  }

  centerText2() {
    return "Истории, способные менять жизнь \"Eurasian Intelligence Unit\" - это приложение к журналу \"The Eurasian\", созданное для тех, кто предпочитает читать материалы через журнал, который можно принести домой или на работу с интересующими вас материалами известных программ ТВ и новостей...  \"Eurasian Intelligence Unit\" – журнал с характером! Мы всегда публикуем экономическую и политическую аналитику, исследования бизнеса в союзах и конфликтах, важные новости экономики, культуры, общественной жизни и спорта. \"Eurasian Intelligence Unit\"- евразийский журнал независимых журналистских гендерно жестких материалов, обзоров и публикаций программ центральных телекомпаний и новостных сайтов. Мы заинтересованы в вас и, публикуя интервью с экономистами, политиками - состоявшимися и восходящими, рок и поп-звездами, художниками, писателями и блогерами знакомим читателей с яркими общественными социально - культурными тенденциями в Евразии и надеемся на обратную связь.";
  }

  diff(currency: string) {
    if (this.currencyLoaded){
      return (+document.getElementById ( currency + "rutm" ).innerText - +document.getElementById ( currency + "rutd" ).innerText);
    }
    else{
      return 0;
    }
  }

  setLang(language: any) {
    switch (language){
      case 'cn':{
        window.open('https://theurasian.cn/', '_blank');
        break;
      }
      case 'uk':{
        window.open('https://theurasian.uk/', '_blank');
        break;
      }
      case 'kz':{
        window.open('https://theurasian.kz/', '_blank');
        break;
      }
      case 'es':{
        window.open('https://theurasian.es/', '_blank');
        break;
      }
      case 'de':{
        window.open('https://theurasian.de/', '_blank');
        //window.open('https://theurasian.de/', '_blank');
        break;
      }
      case 'eu':{
        window.open('https://theurasian.eu/', '_blank');
        break;
      }
      case 'in':{
        window.open('https://theurasian.in', '_blank');
        break;
      }
      case 'ir':{
        this.router.navigate(['indev-noredirect'], {queryParams: {site: 'theurasian.ir'}});
        break;
      }
      case 'pk':{
        this.router.navigate(['indev-noredirect'], {queryParams: {site: 'theurasian.pk'}});
        break;
      }
      case 'qa':{
        window.open('https://theurasian.qa', '_blank');
        break;
      }
      case 'fr':{
        window.open('https://theeurasian.fr', '_blank');
        break;
      }
      case 'it':{
        window.open('https://theurasian.it', '_blank');
        break;
      }
      case 'id':{
        window.open('https://theurasian.id', '_blank');
        break;
      }
      case 'kr':{
        window.open('https://theurasian.kr', '_blank');
        break;
      }
      case 'mn':{
        window.open('https://theurasian.mn', '_blank');
        break;
      }
      case 'vn':{
        window.open('https://theurasian.vn', '_blank');
        break;
      }
      default:{
        window.open('https://xn--80adikfagbh9cp.xn--p1ai/', '_blank');
        break;
      }
    }
  }
  getLanguages() {
    return [
      'uk',
      'eu',
      'es',
      'fr',
      'in',
      'ir',
      'id',
      'it',
      'qa',
      'kz',
      'kr',
      'mn',
      'vn',
      'cn',
      'pk',
      'de',
      'ru',
    ].filter(x => this.languageManager.language != x);
  }

  openPbp() {
    window.open('https://yapbp.org', '_blank');
  }


  openQr(lang: string, vrMobile = 0) {
    console.log(this.gallery);
    let vr = this.gallery.preview.index + 1;
    if (vrMobile != 0){
      vr = vrMobile;
    }
    switch (this.languageManager.getLang()){
      case 'kz':{
        switch (vr){
          case 1:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww8&lang=' + lang, '_blank'); break;
          }
          case 2:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww9&lang=' + lang, '_blank'); break;
          }
          case 3:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww10&lang=' + lang, '_blank'); break;
          }
          case 4:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww11&lang=' + lang, '_blank'); break;
          }
          case 5:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww12&lang=' + lang, '_blank'); break;
          }
          case 6:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww13&lang=' + lang, '_blank'); break;
          }
          case 7:{
            window.open('https://xn--41a.tv/#/watch?video=vr_beslan&lang=' + lang, '_blank'); break;
          }
        }
        break;
      }
      default:{
        switch (vr) {
          case 1: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww8&lang=' + lang, '_blank');
            break;
          }
          case 2: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww9&lang=' + lang, '_blank');
            break;
          }
          case 3: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww10&lang=' + lang, '_blank');
            break;
          }
          case 4: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww11&lang=' + lang, '_blank');
            break;
          }
          case 5: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww12&lang=' + lang, '_blank');
            break;
          }
          case 6: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww13&lang=' + lang, '_blank');
            break;
          }
          case 7:{
            window.open('https://xn--41a.tv/#/watch?video=vr_beslan&lang=' + lang, '_blank');
            break;
          }
        }
      }
    }
  }
  weathers = this.news.weathers;
  currencies = this.news.currencies;
  currencyLanguages = ['BTC', 'CNY', 'EUR', 'GBP', 'IDR', 'INR', 'IRR', 'KPW', 'KZT', 'MNT', 'PKR', 'QAR', 'RUB', 'VND'];
  getQuote(currency: Currency, value: string) {
    return (currency.quotes['USD' + value])?.toString().slice(0, 8);
    //return Math.round(currency.quotes[currency.source + value] * 100) / 100;
  }
  round(input: number){
    return Math.round(input);
  }
  getLangIcon(lang: string) {
    switch (lang) {
      case 'BYN': return 'by';
      case 'CNY': return 'cn';
      case 'EUR': return 'eu';
      case 'INR': return 'in';
      case 'KZT': return 'kz';
      case 'USD': return 'us';
      case 'RUB': return 'ru';
      default: return lang;
    }
  }
  imgSource = '';
  vr = 0;
  @ViewChild('imagePreview') imagePreview: ModalDirective;
  openVR(image: string, index: number) {
    this.vr = index;
    this.imgSource = image;
    this.imagePreview.show();
  }
  vrStyle = {height: '0px', width: '0px', top: '100px', left: '100px', position: 'fixed', 'z-index': '10000'};
  isGalleryPreview() {
    let elements = this.elem.nativeElement.querySelectorAll('.ngx-gallery-preview-img.ngx-gallery-active');
    if (elements.length > 0){
      let height = elements[0].clientHeight;
      let width = elements[0].clientWidth;
      let left = elements[0].offsetLeft;
      let top = elements[0].offsetTop;
      this.vrStyle.top = top + 'px';
      this.vrStyle.left = left + 'px';
      this.vrStyle.height = height + 'px';
      this.vrStyle.width = width + 'px';
      return true;
    }
  }

  getPublishes() {
    if (this.languageManager.language != 'kz'){
      return this.publishes;
    }
    else{
      return this.publishesKZ;
    }
  }
}
