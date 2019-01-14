import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component( {
  selector: 'page-login',
  templateUrl: 'login.html',
} )
export class LoginPage {

  constructor ( public _user: UserServiceProvider,
    public navCtrl: NavController, public navParams: NavParams ) {
  }

  login () {
    console.log( 'Logging you in ' + this._user.username );
    this.navCtrl.parent.select( 0 );
  }

  toReg () {
    this.navCtrl.parent.select( 2 );
  }

  ionViewDidLoad () {
    console.log( 'ionViewDidLoad LoginPage' );
  }

}
