import { Component, OnInit } from '@angular/core';
import {LinkTarget, pdfDefaultOptions} from 'ngx-extended-pdf-viewer';
import {ActivatedRoute} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {

  pdfUrl = 'https://eurasian.press/publishes/15/ru-desktop.pdf';

  constructor(private route: ActivatedRoute, public device: DeviceDetectorService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = params.pdf != null ? params.pdf : this.pdfUrl;
    });
    pdfDefaultOptions.externalLinkTarget = LinkTarget.BLANK;
  }

}
