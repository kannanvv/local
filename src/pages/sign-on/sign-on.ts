import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SignOn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-on',
  templateUrl: 'sign-on.html'
})
export class SignOn {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignOn Page');
  }

}
