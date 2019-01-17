import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component( {
  selector: 'page-login',
  templateUrl: 'login.html',
} )
export class LoginPage {
  username;
  password;
  showFailed = false;
  constructor ( public _user: UserServiceProvider,
    public navCtrl: NavController, public navParams: NavParams ) {
    this.username = '';
    this.password = '';
  }

  login () {
    if ( this._user.username === null || this._user.password === null ) {
      this.showFailed = true;
    } else if ( ( this.password.toLowerCase() === this._user.password )
      && ( this.username.toLowerCase() === this._user.username ) ) {

      console.log( 'Logging you in ' + this._user.username );
      this.showFailed = false;
      this.navCtrl.parent.select( 0 );
    } else {
      this.showFailed = true;
    }

  }

  toReg () {
    this.navCtrl.parent.select( 2 );
  }

  ionViewDidLoad () {
    console.log( 'ionViewDidLoad LoginPage' );
  }

}
