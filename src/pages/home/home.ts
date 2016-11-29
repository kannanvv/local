import { Component, OnInit, Input } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us';
import { NavController, NavParams } from 'ionic-angular';
import {UtilService} from '../../providers/utils';
import { Comment } from '../comment';

@Component({
  templateUrl: 'home.html'
})
export class HomeComponent  implements OnInit{

  comments: Comment[];
  cmsData:any = {};
  data:any={};
  features:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, private _utilService: UtilService) {

  }
  
  ngOnInit() {
    this._utilService.staticData().subscribe(data => {
      this.cmsData = data[0]["home"]
      console.log(JSON.stringify(this.cmsData));
    });

    this.data.headerTitle = "Melsabari";
    this.data.title = "Melsabari Mobile App"; 
    this.data.bodytext = "This starter project will be helping temple administration to keep melsabari devotees intact with temple";


    // this._utilService.getJSONData().subscribe(
    //     comments => {this.comments = comments}, 
    //     err => { console.log(err); });

  }

  submit(){
    console.log('clicked');
	  this.navCtrl.push(AboutUsComponent, {
      item: "param"
    });
  }
}
