import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FundRaiserDetailsComponent} from '../fund-raiser-details/fund-raiser-details';

@Component({
  selector: 'page-fund-raiser',
  templateUrl: 'fund-raiser-landing.html'
})

export class FundRaiserLandingComponent {
  constructor(public navCtrl: NavController) {


}

ionViewDidLoad() {
  console.log('Hello FundRaiser Page');
}

navToFundRaiserDetails(){
  this.navCtrl.push(FundRaiserDetailsComponent, {
    item: "param"
  });
}

}
