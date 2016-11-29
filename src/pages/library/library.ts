import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Library Page');
  }

}
