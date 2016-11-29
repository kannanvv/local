import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FundRaiserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fund-raiser-details',
  templateUrl: 'fund-raiser-details.html'
})
export class FundRaiserDetailsComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FundRaiserDetails Page');
  }

}
