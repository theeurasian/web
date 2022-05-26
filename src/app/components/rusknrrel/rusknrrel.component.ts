import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-rusknrrel',
  templateUrl: './rusknrrel.component.html',
  styleUrls: ['./rusknrrel.component.css']
})
export class RusknrrelComponent implements OnInit {


  lang = '';

  constructor(private route: ActivatedRoute, public device: DeviceDetectorService, private router: Router) { }
  getLanguages() {
    return [
      'uk',
      'eu',
      //'es',
      'fr',
      //'in',
      //'ir',
      //'id',
      'it',
      //'qa',
      //'kz',
      //'kr',
      //'mn',
      //'vn',
      'cn',
      //'pk',
      //'de',
      'ru'
    ].sort();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.lang = params.lang != null ? params.lang : '';
    });
  }

  ngAfterViewInit() {
  }

  selectLanguage(selectedLang: string) {
    let lang = selectedLang;
    this.router.navigate([], {queryParams: {lang}, queryParamsHandling: 'merge'}).then(() => {
      // location.reload();
    });
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
