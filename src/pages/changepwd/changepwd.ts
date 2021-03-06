import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
 import 'rxjs/add/operator/map'
  import 'rxjs/Rx';
  import { Http, Headers, RequestOptions } from '@angular/http';
import { SigninPage } from '../signin/signin';
import {LoadingController,ToastController} from 'ionic-angular';


/**
 * Generated class for the ChangepwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-changepwd',
  templateUrl: 'changepwd.html',
})
export class ChangepwdPage {
    public data: any = {};
    User:any;

public Loading=this.loadingCtrl.create({
  content: 'Please wait...'
  
});
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,  public http: Http ,public  loadingCtrl:LoadingController) {
   this.User = localStorage.getItem("USER_DATA")
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepwdPage');
  }
 changepass(changepass){
      
let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
let options= new RequestOptions({ headers: headers });
var User = JSON.parse(localStorage.getItem("USER_DATA"));
       console.log(User.email);
     
       this.Loading.present();
 var data = {
        email: User.email,
       password: changepass.value.password,
       newpassword: changepass.value.newpassword
}
 console.log(data);
var Serialized = this.serializeObj(data);
 console.log(data);
 
 this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/changepwd',Serialized, options).map(res=>res.json()).subscribe(data=>{
        console.log(data.status);
        this.Loading.dismiss();
      
if(data.status==true){
       console.log("true");
     let alert = this.alertCtrl.create({
      title: 'Change password',
      subTitle: data.message
 });
 alert.present();
 setTimeout(()=>alert.dismiss(),2500);
  localStorage.clear();
 this.navCtrl.push(SigninPage);
}
 else{
     let alert = this.alertCtrl.create({
 title: 'Change password',
 subTitle: data.message ,
 buttons: ['ok']
 });

alert.present();
 setTimeout(()=>alert.dismiss(),5500);
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
