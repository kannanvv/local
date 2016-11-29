import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-artifacts',
  templateUrl: 'artifacts.html'
})
export class ArtifactsComponent{

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Artifacts Page');
  }

}
