import {EventEmitter, Injectable} from '@angular/core';
import {WSCmd} from '../websocket/structure/wscmd';
import {ActivatedRoute, Router} from '@angular/router';
import {RssItem} from './struct/rss-item';
import {WeatherInfo} from './struct/weather-info';
import {Currency} from './struct/currency';
import {LangService} from '../lang/lang.service';

@Injectable({
  providedIn: 'root'
})
export class NewsManagerService {
  private ws: WebSocket;
  initialized = false;

  rssNews: RssItem[] = [];
  weathers: WeatherInfo[] = [];
  currencies: Currency[] = [];
  event = new EventEmitter();

  init(ws: WebSocket){
    this.ws = ws;
    this.askForData();
    this.initialized = true;
  }
  askForData(){
    let cmd = new WSCmd('');
    switch (this.lang.getLang()) {
      case 'en':{
        cmd = new WSCmd("getEnRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'ru':{
        cmd = new WSCmd("getRuRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'es':{
        cmd = new WSCmd("getEsRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'fr':{
        cmd = new WSCmd("getFrRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'in':{
        cmd = new WSCmd("getInRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'ir':{
        cmd = new WSCmd("getIrRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'id':{
        cmd = new WSCmd("getIdRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'it':{
        cmd = new WSCmd("getEsRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'qa':{
        cmd = new WSCmd("getQaRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'kz':{
        cmd = new WSCmd("getKzRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'kr':{
        cmd = new WSCmd("getKoRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'mn':{
        cmd = new WSCmd("getMnRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'vn':{
        cmd = new WSCmd("getVnRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'cn':{
        cmd = new WSCmd("getCnRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'pk':{
        cmd = new WSCmd("getPkRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'de':{
        cmd = new WSCmd("getDeRss");
        this.ws.send(cmd.toJson());
        break;
      }
      case 'zh':{
        cmd = new WSCmd("getCnRss");
        this.ws.send(cmd.toJson());
        break;
      }
    }


    cmd = new WSCmd("getWeather");
    this.ws.send(cmd.toJson());
    cmd = new WSCmd("getCurrencies");
    this.ws.send(cmd.toJson());
  }

  constructor(private lang: LangService, private router: Router, private activatedRoute: ActivatedRoute) {}

  setRssNews(rssNewsValue: any) {
    this.rssNews.splice(0, this.rssNews.length);
    (<RssItem[]>rssNewsValue).forEach(rssNewsItemValue => {
      this.rssNews.push(rssNewsItemValue);
    });
  }
  setWeather(weathersValue: any) {
    this.weathers.splice(0, this.weathers.length);
    (<WeatherInfo[]>weathersValue).forEach(weatherValue => {
      this.weathers.push(weatherValue);
    });
  }
  setCurrencies(currenciesValue: any){
    this.currencies.splice(0, this.currencies.length);
    (<Currency[]>currenciesValue).forEach(currencyValue => {
      this.currencies.push(currencyValue);
    });
  }
}
