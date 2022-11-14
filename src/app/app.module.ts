import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HighLightOnHoverDirective } from './directives/high-light-on-hover.directive';
import { AppearOnClickDirective } from './directives/appear-on-click.directive';
import { RotateOnClickDirective } from './directives/rotate-on-click.directive';
import { AppearOnHoverDirective } from './directives/appear-on-hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Overlay} from '@angular/cdk/overlay';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { DownloadComponent } from './components/download/download.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import {IndevComponent} from './components/indev/indev.component';
import { MtchComponent } from './components/mtch/mtch.component';
import { NdchComponent } from './components/ndch/ndch.component';
import { GEnComponent } from './components/g-en/g-en.component';
import { GCnComponent } from './components/g-cn/g-cn.component';
import {IndevNoredirectComponent} from './components/indev-noredirect/indev-noredirect.component';
import {CertComponent} from './components/cert/cert.component';
import { BcalledexamComponent } from './components/bcalledexam/bcalledexam.component';
import { NmrighttoknowComponent } from './components/nmrighttoknow/nmrighttoknow.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { SdvttoyearsComponent } from './components/sdvttoyears/sdvttoyears.component';
import { TemirtransservComponent } from './components/temirtransserv/temirtransserv.component';
import { Wday22Component } from './components/wday22/wday22.component';
import { ArticleComponent } from './components/article/article.component';
import { Vsv050522Component } from './components/vsv050522/vsv050522.component';
import { Akgl250322Component } from './components/akgl250322/akgl250322.component';
import { Kzbs260322Component } from './components/kzbs260322/kzbs260322.component';
import { Lch250522Component } from './components/lch250522/lch250522.component';
import {MeetrfandkzComponent} from './components/meetrfandkz/meetrfandkz.component';
import {Newreg210322Component} from './components/newreg210322/newreg210322.component';
import {Pcf120422Component} from './components/pcf120422/pcf120422.component';
import {RusknrrelComponent} from './components/rusknrrel/rusknrrel.component';
import {Zrsr250322Component} from './components/zrsr250322/zrsr250322.component';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {VimeModule} from '@vime/angular';
import { MagazineArchiveComponent } from './components/magazine-archive/magazine-archive.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: '*', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'last-issue', component: PdfReaderComponent },
  { path: 'read', component: PdfReaderComponent },
  { path: 'indev', component: IndevComponent },
  { path: 'mtch', component: MtchComponent },
  { path: 'ndch', component: NdchComponent },
  { path: 'g-en', component: GEnComponent },
  { path: 'g-cn', component: GCnComponent },
  { path: 'indev-noredirect', component: IndevNoredirectComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cert', component: CertComponent },
  { path: 'bcalledexam', component: BcalledexamComponent },
  { path: 'nmrighttoknow', component: NmrighttoknowComponent },
  { path: 'sdvttoyears', component: SdvttoyearsComponent },
  { path: 'temirtransserv', component: TemirtransservComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'wday22', component: Wday22Component },
  { path: 'article', component: ArticleComponent },
  { path: 'vsv050522', component: Vsv050522Component },
  { path: 'akgl250322', component: Akgl250322Component },
  { path: 'kzbs260322', component: Kzbs260322Component },
  { path: 'lch250522', component: Lch250522Component },
  { path: 'meetrfandkz', component: MeetrfandkzComponent },
  { path: 'newreg210322', component: Newreg210322Component },
  { path: 'pcf120422', component: Pcf120422Component },
  { path: 'rusknrrel', component: RusknrrelComponent },
  { path: 'zrsr250322', component: Zrsr250322Component },
  { path: 'pdf-view', component: PdfViewComponent },
  { path: 'arh', component: MagazineArchiveComponent },
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HighLightOnHoverDirective,
    AppearOnClickDirective,
    RotateOnClickDirective,
    AppearOnHoverDirective,
    ContactsComponent,
    PrivacyComponent,
    DownloadComponent,
    PdfReaderComponent,
    IndevComponent,
    MtchComponent,
    NdchComponent,
    GEnComponent,
    GCnComponent,
    IndevNoredirectComponent,
    CertComponent,
    BcalledexamComponent,
    NmrighttoknowComponent,
    SdvttoyearsComponent,
    TemirtransservComponent,
    Wday22Component,
    ArticleComponent,
    Vsv050522Component,
    Akgl250322Component,
    Kzbs260322Component,
    Lch250522Component,
    MeetrfandkzComponent,
    Zrsr250322Component,
    RusknrrelComponent,
    Newreg210322Component,
    PdfViewComponent,
    MagazineArchiveComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DeviceDetectorModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule,
        LazyLoadImageModule,
        NgxQRCodeModule,
        NgxExtendedPdfViewerModule,
        VimeModule
    ],
  providers: [
    AppearOnClickDirective,
    RotateOnClickDirective,
    AppearOnHoverDirective,
    Overlay,
    DatePipe,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
