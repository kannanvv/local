import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HomeComponent } from '../pages/home/home';
import { List } from '../pages/list/list';
import { AboutUsComponent } from '../pages/about-us/about-us';
import { AboutUsWhy } from '../pages/about-us-why/about-us-why';
import { LibraryAudio } from '../pages/library-audio/library-audio';
import { LibraryVideo } from '../pages/library-video/library-video';
import { GalleryComponent } from '../pages/gallery/gallery';
import { FundRaiserLandingComponent } from '../pages/fund-raiser/fund-raiser-landing/fund-raiser-landing';
import { EventsComponent } from '../pages/events/events';
import { ArtifactsComponent } from '../pages/artifacts/artifacts';
import { LibraryComponent } from '../pages/library/library';
import { SettingsComponent } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomeComponent;
  pages: Array<{title: string, component: any}>;


  constructor( public platform: Platform, public menu: MenuController) {
    this.initializeApp();
    this.getMenuItems();
  }

  getMenuItems(){
    this.pages = [
          { title: 'Home', component: HomeComponent},
          { title: 'Gallery', component: GalleryComponent },
          { title: 'Fund Raiser', component: FundRaiserLandingComponent },
          { title: 'Calendar', component: EventsComponent },
          { title: 'Artifacts', component: ArtifactsComponent},
          { title: 'Library', component: LibraryComponent}, 
          { title: 'About Us', component: AboutUsComponent },
          { title: 'Settings', component: SettingsComponent },
         ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault(); 
    });
  }

  openPage(page) {
    this.menu.close(); 
    this.nav.setRoot(page.component);
  }
}
