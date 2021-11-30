import {EventEmitter, Injectable} from '@angular/core';
// @ts-ignore
import * as wsconfig from '../../../assets/wsconfig.json';
import {WSCmd} from './structure/wscmd';
import {Router} from '@angular/router';
import {NewsManagerService} from '../news/news-manager.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketManagerService {
  private ws: WebSocket;
  private noConnectionUrl = '/no-connection';
  private established = false;
  private retries = 0;
  private retriesLimit = 3;
  event = new EventEmitter();
  constructor
  (
    private router: Router,
    private news: NewsManagerService
  )
  {
    this.init();
  }
  isOpen(){
    return this.established;
  }
  private init(){
    this.ws = new WebSocket(`wss://${wsconfig.host}:${wsconfig.port}`);
    this.retries += 1;
    if (this.retries > this.retriesLimit){
      if (!this.router.url.includes(this.noConnectionUrl)){
        //this.router.navigate([this.noConnectionUrl], { queryParams: { redirect: window.location.href } });
      }
    }
    this.ws.onopen = () => {
      this.event.emit('open');
      this.invoke();
      this.established = true;
      this.ws.onclose = () => {
        this.established = false;
        this.init();
      };
      this.ws.onmessage = (event) => {
        let wsCmd = new WSCmd(event.data);
        switch (wsCmd.name) {
          case "payment":{
            window.open(wsCmd.body, "_self");
            break;
          }
          case "rssNews":{
            this.news.setRssNews(wsCmd.body);
            break;
          }
          case "weather":{
            this.news.setWeather(wsCmd.body);
            break;
          }
          case "currencies":{
            this.news.setCurrencies(wsCmd.body);
            break;
          }
          default:{
            console.log("WebSocket received unknown command " + wsCmd.name);
            break;
          }
        }
      };
    };
    this.ws.onerror = () => {
      this.init();
    };
  }

  private invoke(){
    //this.auth.init(this.ws);
    //this.video.init(this.ws);
    this.news.init(this.ws);
  }

  public send(message: string){
    this.ws.send(message)
  }
}
