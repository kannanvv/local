import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LibraryAudio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'library-audio.html'
})
export class LibraryAudio {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LibraryAudio Page');
  }

}
