import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lch250522',
  templateUrl: './lch250522.component.html',
  styleUrls: ['./lch250522.component.css']
})
export class Lch250522Component implements OnInit {

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
