import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';   
import {Http, RequestOptions,Headers } from "@angular/http";
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ForgtpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forgtpwd',
  templateUrl: 'forgtpwd.html',
})
export class ForgtpwdPage {
public data:any = {}
  constructor(public navCtrl: NavController,
    public navParams: NavParams,

    public loadingCtrl:LoadingController,
    public http:Http,
    public toastCtrl:ToastController,
    public alertCtrl:AlertController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgtpwdPage');
  }
    forgot(forgotdata){
  console.log('forgot');
  console.log(forgotdata.value);
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  var postdata = {
    email:  forgotdata.value.email
  }
  console.log(postdata);
  //alert(JSON.stringify(postdata));
  var Serialized = this.serializeObj(postdata);
                console.log(Serialized);
  this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/forgetpassword',Serialized,options).map(res=>res.json()).subscribe(response=>{
    console.log(response);
   
    if(response.status == true){
        
     
  
    }
  })


}

serializeObj(obj) {
  var result = [];
  for (var property in obj)
    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

  return result.join("&");
}

   

}
