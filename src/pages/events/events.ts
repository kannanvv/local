import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Events Page');
  }

}
