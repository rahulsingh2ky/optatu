import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepwdPage } from '../changepwd/changepwd';
import { HelpPage } from '../help/help';
import { SettingPage } from '../setting/setting';
import { TermsPage } from '../terms/terms';
import { PrivacypolicyPage } from '../privacypolicy/privacypolicy';



/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }

myprofile() {
    this.navCtrl.push(MyprofilePage);
  }

  editprofile1() {
    this.navCtrl.push(EditprofilePage);
  }
   
  changepwd1() {
    this.navCtrl.push(ChangepwdPage);
  }

 help() {
    this.navCtrl.push(HelpPage);
  }


 setting() {
    this.navCtrl.push(SettingPage);
  }

  terms() {
    this.navCtrl.push(TermsPage);
  }

   privacypolicy() {
    this.navCtrl.push(PrivacypolicyPage);
  }


}
