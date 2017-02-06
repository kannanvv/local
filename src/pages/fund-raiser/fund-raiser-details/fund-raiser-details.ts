import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
