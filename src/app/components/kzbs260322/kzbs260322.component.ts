import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kzbs260322',
  templateUrl: './kzbs260322.component.html',
  styleUrls: ['./kzbs260322.component.css']
})
export class Kzbs260322Component implements OnInit {

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
