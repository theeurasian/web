import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-akgl250322',
  templateUrl: './akgl250322.component.html',
  styleUrls: ['./akgl250322.component.css']
})
export class Akgl250322Component implements OnInit {


  constructor() {
  }
  ngOnInit(): void {

  }

  open(url: string) {
    window.open(url, '_blank');
  }

  openLogo() {
    window.open('https://eurasian.press', '_blank');
  }

}
