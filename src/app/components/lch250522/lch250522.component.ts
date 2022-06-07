import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-lch250522',
  templateUrl: './lch250522.component.html',
  styleUrls: ['./lch250522.component.css']
})
export class Lch250522Component implements OnInit {
  lang = 'ru';

  constructor(private route: ActivatedRoute, public device: DeviceDetectorService, private router: Router) { }
  getLanguages() {
    return [
      //'cn',
      'kz',
      'ru',
      //'uk',
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
