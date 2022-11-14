import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NewsManagerService} from '../../domain/news/news-manager.service';
import {RssItem} from '../../domain/news/struct/rss-item';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import { get } from 'scriptjs';
import {WSCmd} from '../../domain/websocket/structure/wscmd';
import {WebSocketManagerService} from '../../domain/websocket/web-socket-manager.service';
import {Currency} from '../../domain/news/struct/currency';
import {LangService} from '../../domain/lang/lang.service';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery-9';
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
  publishes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reverse();
  publishesKZ = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11-kz', '12-kz', '13-kz', '14-kz']).reverse();
  openingPublish = 0;
  soundEnabled = false;
  showSound = false;


  vrs = [52, 60, 61, 58, 48, 47, 46, 45, 44, 43, 26, 1];
  vrsKZ = [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15];
  vrsRU = [52, 60, 61, 58, 54, 48, 47, 46, 45, 44, 43, 26, 1];
  newDesign = [60, 61, 59, 58, 52, 54, 48];

  videoPreviewSrc = '';
  rssNews: RssItem[] = this.news.rssNews;
  currencyLoaded = false;


  aliases = [];
  aliasName = 'mail';
  alias = '';
  url = '';

  selected = '';
  selectedNext = '';
  selectedNextNext = '';


  aliasLabel = 'Mail Alias (Google)';
  aliasUrl = 'Mail Url (https://mail.google.com/mail/)';

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
    [ 'ontvtime_ntv11.jpg', 'https://www.ontvtime.ru/general/ntv-6.html' ],
    [ 'russiak_ontvtime1.jpg', 'https://www.ontvtime.ru/live/russiak-2.html' ],
    [ 'ontvtime_tv3_6.jpg', 'https://www.ontvtime.ru/general/tv3.html' ],
    [ 'russia24_ontvtime.jpg', 'https://www.ontvtime.ru/live/russia24.html' ],
    [ 'ontvtime_tvc.jpg', 'https://www.ontvtime.ru/general/tvc.html' ],
    [ 'ontvtime_rentv.jpg', 'https://www.ontvtime.ru/general/rentv.html' ],
    [ 'ontvtime_tnt.jpg', 'https://www.ontvtime.ru/live/tnt.html' ],
    [ 'ontvtime_sts6.jpg', 'https://www.ontvtime.ru/live/sts3.html' ],
    [ 'zvezda.jpg', 'https://www.ontvtime.ru/live/zvezda.html' ],
    [ 'ontvtime_5channel.jpg', 'https://www.ontvtime.ru/general/channel5.html' ],
    [ 'ontvtime_karusel1.jpg', 'https://www.ontvtime.ru/live/karusel-2.html' ],
    [ 'ontvtime_otr.png', 'https://www.ontvtime.ru/live/otr.html' ],
    [ 'ontvtime_mir2.jpg', 'https://www.ontvtime.ru/live/mir.html' ],
    [ 'ontvtime_domashniy5.jpg', 'https://www.ontvtime.ru/general/domashniy.html' ],
    [ 'rbc_ontvtime.jpg', 'https://www.ontvtime.ru/live/rbc.html' ],
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
    [ 'ontvtime_ntv11.jpg', 'https://www.ontvtime.ru/general/ntv-6.html' ],
    [ 'russiak_ontvtime1.jpg', 'https://www.ontvtime.ru/live/russiak-2.html' ],
    [ 'ontvtime_tv3_6.jpg', 'https://www.ontvtime.ru/general/tv3.html' ]
  ];
  tvs2 = [
    [ 'russia24_ontvtime.jpg', 'https://www.ontvtime.ru/live/russia24.html' ],
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
    [ 'ontvtime_mir2.jpg', 'https://www.ontvtime.ru/live/mir.html' ]
  ];
  tvs4 = [
    [ 'ontvtime_domashniy5.jpg', 'https://www.ontvtime.ru/general/domashniy.html' ],
    [ 'rbc_ontvtime.jpg', 'https://www.ontvtime.ru/live/rbc.html' ],
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
  videoTime = 0;
  ngOnInit(): void {
    let aliases = localStorage.getItem('aliases');
    if (aliases != null){
      this.aliases = JSON.parse(aliases) as [];
    }
    this.galleryOptions = [
      { },
      { image: false, width: '1400px', height: '480px', imageAutoPlay: true, thumbnailsArrows: true, imageAutoPlayInterval: 1000, thumbnailsPercent: 100},
    ];
    this.galleryOptionsMobile = [
      { },
      { image: false, width: '300px', height: '400px', thumbnailsColumns: 1, imageAutoPlay: true, thumbnailsArrows: true, imageAutoPlayInterval: 1000, thumbnailsPercent: 100, imageSwipe: true},
    ];
    if (this.languageManager.language == 'kz'){
      this.vrsKZ.forEach(vr => {
        this.galleryImages.push(
          {
            small: 'assets/vr-kz/' + vr + '.svg',
            medium: 'assets/vr-kz/' + vr + '.svg',
            big: 'assets/vr-kz/' + vr + '.svg',
          }
        );
      });
    }
    else if (this.languageManager.language == 'ru' || this.languageManager.language == 'by'){
      this.vrsRU.forEach(vr => {
        this.galleryImages.push(
          {
            small: 'assets/vr/' + vr + '.svg',
            medium: 'assets/vr/' + vr + '.svg',
            big: 'assets/vr/' + vr + '.svg',
          }
        );
      });
    }
    else{
      this.vrs.forEach(vr => {
        this.galleryImages.push(
          {
            small: 'assets/vr/' + vr + '.svg',
            medium: 'assets/vr/' + vr + '.svg',
            big: 'assets/vr/' + vr + '.svg',
          }
        );
      });
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

    if (this.lang.language == 'ru'){
      this.videoPreviewSrc = '/assets/preview_ru.mp4';
    }
    else if (this.lang.language == 'cn'){
      this.videoPreviewSrc = '/assets/preview_cn.mp4';
    }
    else{
      this.videoPreviewSrc = '/assets/preview_en.mp4';
    }
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

  selectJournal(number: any, lang = 'ru') {
    if (number == 14 || number == '14-kz'){
      window.open('https://eurasian.press/publishes/14/' + lang + '-' + (this.device.isMobile() ? 'mobile' : 'desktop') + '.pdf');
    }
    else{
      window.open('https://eurasian.press/#/read?issue=' + number.toString().replace('-kz', '') + '&lang=' + (number.toString().includes('kz') ? 'kz' : lang), '_blank');
    }
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
        window.open('https://theurasian.fr', '_blank');
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
      case 'by':{
        window.open('https://theurasian.by', '_blank');
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
      'by'
    ].filter(x => this.languageManager.language != x);
  }

  openPbp() {
    window.open('https://yapbp.org', '_blank');
  }


  openQr(lang: string, vrMobile = 0) {
    console.log(this.gallery);
    let vr = this.gallery?.preview?.index + 1;
    if (vrMobile != 0){
      vr = vrMobile;
    }
    switch (this.languageManager.getLang()){
      case 'kz':{
        switch (vr){
          case 1:{
            window.open('https://xn--41a.tv/#/watch?video=interlukbbc&lang=' + lang, '_blank'); break;
          }
          case 2: {
            window.open('https://xn--41a.tv/#/watch?video=svpravda210122&lang=ru', '_blank');
            break;
          }
          case 3: {
            window.open('https://xn--41a.tv/#/watch?video=vechervs160122&lang=ru', '_blank');
            break;
          }
          case 4: {
            window.open('https://xn--41a.tv/#/watch?video=vechervs170122&lang=ru', '_blank');
            break;
          }
          case 5: {
            window.open('https://xn--41a.tv/#/watch?video=vvsvs010922&lang=ru', '_blank');
            break;
          }
          case 6: {
            window.open('https://xn--41a.tv/#/watch?video=ukrbesk30let&lang=' + lang, '_blank');
            break;
          }
          case 7:{
            window.open('https://xn--41a.tv/#/watch?video=vvechervs261221&lang=ru', '_blank'); break;
          }
          case 8:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww9&lang=' + lang, '_blank'); break;
          }
          case 9:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww10&lang=' + lang, '_blank'); break;
          }
          case 10:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww11&lang=' + lang, '_blank'); break;
          }
          case 11:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww12&lang=' + lang, '_blank'); break;
          }
          case 12:{
            window.open('https://xn--41a.tv/#/watch?video=vr_ww13&lang=' + lang, '_blank'); break;
          }
          case 13:{
            window.open('https://xn--41a.tv/#/watch?video=vr_beslan&lang=' + lang, '_blank'); break;
          }
        }
        break;
      }
      default:{
        switch (vr) {
          case 1: {
            window.open('https://xn--41a.tv/#/watch?video=interlukbbc&lang=' + lang, '_blank');
            break;
          }
          case 2: {
            window.open('https://xn--41a.tv/#/watch?video=svpravda210122&lang=ru', '_blank');
            break;
          }
          case 3: {
            window.open('https://xn--41a.tv/#/watch?video=vechervs160122&lang=ru', '_blank');
            break;
          }
          case 4: {
            window.open('https://xn--41a.tv/#/watch?video=vechervs170122&lang=ru', '_blank');
            break;
          }
          case 5: {
            window.open('https://xn--41a.tv/#/watch?video=vvsvs010922&lang=ru', '_blank');
            break;
          }
          case 6: {
            window.open('https://xn--41a.tv/#/watch?video=ukrbesk30let&lang=' + lang, '_blank');
            break;
          }
          case 7: {
            window.open('https://xn--41a.tv/#/watch?video=vtorjdocfilm&lang=ru' + lang, '_blank');
            break;
          }
          case 8: {
            window.open('https://xn--41a.tv/#/watch?video=vvechervs261221&lang=ru', '_blank');
            break;
          }
          case 9: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww8&lang=' + lang, '_blank');
            break;
          }
          case 10: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww9&lang=' + lang, '_blank');
            break;
          }
          case 11: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww10&lang=' + lang, '_blank');
            break;
          }
          case 12: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww11&lang=' + lang, '_blank');
            break;
          }
          case 13: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww12&lang=' + lang, '_blank');
            break;
          }
          case 14: {
            window.open('https://xn--41a.tv/#/watch?video=vr_ww13&lang=' + lang, '_blank');
            break;
          }
          case 15:{
            window.open('https://xn--41a.tv/#/watch?video=vr_beslan&lang=' + lang, '_blank');
            break;
          }
        }
      }
    }
  }
  weathers = this.news.weathers;
  currencies = this.news.currencies;
  currencyCodes = ['BTC', 'CNY', 'EUR', 'GBP', 'IDR', 'INR', 'IRR', 'KPW', 'KZT', 'MNT', 'PKR', 'QAR', 'RUB', 'VND'];
  getCurrencyQuote(currency: Currency, value: string) {
    return (currency.quotes['USD' + value])?.toString().slice(0, 8);
    //return Math.round(currency.quotes[currency.source + value] * 100) / 100;
  }
  round(input: number){
    return Math.round(input);
  }
  getCurrencyIcon(lang: string) {
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
  // @ViewChild('imagePreview') imagePreview: ModalDirective;
  openVR(image: string, index: number) {
    this.vr = index;
    this.imgSource = image;
    // this.imagePreview.show();
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


  openMail(mail: string) {
    switch (mail) {
      case 'mail':{
        window.open('https://e.mail.ru/inbox/', '_blank');
        break;
      }
      case 'yandex':{
        window.open('https://mail.yandex.com/', '_blank');
        break;
      }
      case 'gmail':{
        window.open('https://mail.google.com/mail/', '_blank');
        break;
      }
      default:{
        break;
      }
    }
  }

  addAlias(){
    this.aliases.push({name: this.alias, url: this.url, aliasName: this.aliasName});
    localStorage.setItem('aliases', JSON.stringify(this.aliases));
  }
  removeAlias(name: string, alias: any){
    this.aliases.splice(this.aliases.indexOf(alias), 1);
    localStorage.setItem('aliases', JSON.stringify(this.alias));
  }
  getAliases(name: string){
    return this.aliases != null ? this.aliases.filter(x => x.aliasName == name) : [];
  }
  isSelected(input: string){
    return this.selected == input;
  }
  resetSelects() {
    this.selected = '';
    this.resetSelectsNext();
    this.resetSelectsNextNext();
  }

  isOpenedVr(value: number){
    if (!this.device.isMobile()){
      return this.galleryImages[this.gallery?.selectedIndex]?.small?.toString().split('/').pop().replace('.svg', '') == value.toString();
    }
    else{
      return this.imgSource?.toString().split('/').pop().replace('.svg', '') == value.toString();
    }
  }
  isSelectedNext(input: string){
    return this.selectedNext == input;
  }
  resetSelectsNext() {
    this.selectedNext = '';
    this.resetSelectsNextNext();
  }

  isSelectedNextNext(input: string) {
    return this.selectedNextNext == input;
  }
  resetSelectsNextNext() {
    this.selectedNextNext = '';
  }
  isNewDesign() {
    let res = false;
    this.newDesign.forEach(vr => {
      if (!this.device.isMobile() && this.isOpenedVr(vr)){
        res = true;
      }
      if (this.device.isMobile() && this.imgSource?.toString().split('/').pop().replace('.svg', '') == vr.toString()){
        res = true;
      }
    });
    return res;
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
  preOpenPublish(number: any){
    this.openingPublish = number;
    if (!this.device.isMobile()){
      this.openPublish(number);
    }
    else{
      setTimeout(() => {
        this.openingPublish = 0;
        this.openPublish(number);
      }, 500);
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

  onVideoLoad(event: Event, video: any) {
    console.log(video);
    // @ts-ignore
    // console.log(event.target.duration);
    // @ts-ignore
    this.videoTime = new Date().getTime() / 1000 % event.target.duration;
    video.play();
    try{
      video.play();
    }
    catch (e: any){

    }
  }

  vmReady(event: any) {
    this.videoTime = new Date().getTime() / 1000 % event.target.duration;
    try{
      //event.target.play();
    }
    catch (e: any){

    }
  }
}
