import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HighLightOnHoverDirective } from './directives/high-light-on-hover.directive';
import { AppearOnClickDirective } from './directives/appear-on-click.directive';
import { RotateOnClickDirective } from './directives/rotate-on-click.directive';
import { AppearOnHoverDirective } from './directives/appear-on-hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {AngularResizedEventModule} from 'angular-resize-event';
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
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {CertComponent} from './components/cert/cert.component';

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
    CertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    AngularResizedEventModule,
    LazyLoadImageModule,
    NgxGalleryModule,
    NgxImageZoomModule
  ],
  providers: [
    AppearOnClickDirective,
    RotateOnClickDirective,
    AppearOnHoverDirective,
    MatSnackBar,
    Overlay,
    DatePipe,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
