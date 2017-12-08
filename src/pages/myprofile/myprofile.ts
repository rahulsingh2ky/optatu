import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController ,Events} from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepwdPage } from '../changepwd/changepwd';
import { HelpPage } from '../help/help';
import { SettingPage } from '../setting/setting';
import { TermsPage } from '../terms/terms';
import { PrivacypolicyPage } from '../privacypolicy/privacypolicy';
import { SigninPage } from '../signin/signin';
import { Http, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map'
  import 'rxjs/Rx';
  

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
      abc;
      data= {};
  constructor(public navCtrl: NavController,
      public http: Http,
      private alertCtrl: AlertController,
     public  events: Events
      ) {     
         console.log("constr");
       this.abc = JSON.parse(localStorage.getItem("USER_DATA"));
       console.log(this.abc);
                    
  }

  ionViewDidLoad() {
       console.log('profile load');
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var data = {
      user_id: JSON.parse(localStorage.getItem('USER_DATA')).id
    }
    var Serialized = this.serializeObj(data);
    this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/user_profile_pic', Serialized, options).map(res => res.json()).subscribe(response => {  
     console.log(response);
           
             
          
       })}
       
  

myprofile() {
    this.navCtrl.push(MyprofilePage);
  }
   serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
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
  logout()
  {
    // if(localStorage.getItem("username")!=null && localStorage.getItem("password")!=null){
      localStorage.clear();
        // localStorage.removeItem("USER_DATA");
         
         
         let alert = this.alertCtrl.create({
        title: 'Logged out',
        subTitle: "Logged out successfully",
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 1000);
       this.navCtrl.push(SigninPage);
         
     //}
      
      
  }


}
