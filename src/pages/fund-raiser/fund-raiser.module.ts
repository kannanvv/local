import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {FundRaiserDetailsComponent} from './fund-raiser-details/fund-raiser-details';
import { FundRaiserLandingComponent } from './fund-raiser-landing/fund-raiser-landing';


@NgModule({
  imports:      [BrowserModule, FormsModule, HttpModule, JsonpModule, CommonModule, IonicModule ],
  declarations: [ FundRaiserLandingComponent, FundRaiserDetailsComponent ],
  exports:      [ FundRaiserLandingComponent ],
  providers:    [  ]
})
export class FundRaiserModule { }