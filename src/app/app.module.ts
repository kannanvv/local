import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { MyApp } from './app.component';
import { HomeComponent} from '../pages/home/home';
import { List} from '../pages/list/list';
import { AboutUsComponent } from '../pages/about-us/about-us';
import { AboutUsWhy } from '../pages/about-us-why/about-us-why';
import { LibraryAudio } from '../pages/library-audio/library-audio';
import { LibraryVideo } from '../pages/library-video/library-video';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { GalleryComponent } from '../pages/gallery/gallery';
import { EventsComponent } from '../pages/events/events';
import { ArtifactsComponent } from '../pages/artifacts/artifacts';
import { LibraryComponent } from '../pages/library/library';
import { SettingsComponent } from '../pages/settings/settings';
import {UtilService} from '../providers/utils';
import {FundRaiserModule} from '../pages/fund-raiser/fund-raiser.module';

@NgModule({
  declarations: [
    MyApp, 
    HomeComponent, 
    GalleryComponent,
    EventsComponent, 
    ArtifactsComponent, 
    LibraryComponent, 
    AboutUsComponent, 
    SettingsComponent
  ],
  entryComponents: [
    MyApp, 
    HomeComponent, 
    GalleryComponent, 
    EventsComponent, 
    ArtifactsComponent, 
    LibraryComponent, 
    AboutUsComponent, 
    SettingsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    FormsModule, 
    HttpModule, 
    JsonpModule, 
    FundRaiserModule
  ], 
  bootstrap: [
    IonicApp
  ],
  providers: [
    UtilService
  ]
})
export class AppModule {}

   