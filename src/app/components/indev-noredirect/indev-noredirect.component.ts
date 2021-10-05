import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-indev-noredirect',
  templateUrl: './indev-noredirect.component.html',
  styleUrls: ['./indev-noredirect.component.css']
})
export class IndevNoredirectComponent implements OnInit {
  website = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.website = params.site;
    });
  }
}
