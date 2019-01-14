import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'

@IonicPage()
@Component( {
  selector: 'page-tab',
  templateUrl: 'tab.html',
} )
export class TabPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;

  constructor ( public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad () {
    console.log( 'ionViewDidLoad TabPage' );
  }

}
