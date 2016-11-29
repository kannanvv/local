import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {

  constructor(public navCtrl: NavController) {}



  ionViewDidLoad() {
    console.log('Hello Gallery Page');
  }

}
