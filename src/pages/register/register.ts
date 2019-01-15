import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component( {
  selector: 'page-register',
  templateUrl: 'register.html',
} )
export class RegisterPage {
  username;
  password;
  dob;
  constructor ( public _user: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  register () {
    this._user.username = this.username;
    this._user.password = this.password;
    this._user.dob = this.dob;
    this.navCtrl.parent.select( 0 );
  }

  ionViewDidLoad () {
    console.log( 'ionViewDidLoad RegisterPage' );
  }

}
