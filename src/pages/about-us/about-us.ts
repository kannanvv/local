import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AboutUs Page');
  }

}
