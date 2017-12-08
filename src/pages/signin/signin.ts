import { Component } from '@angular/core';
import { IonicPage,NavParams, NavController,AlertController,Events} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgtpwdPage } from '../forgtpwd/forgtpwd';
import { GetstartPage } from '../getstart/getstart';
import { Http, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map'
  import 'rxjs/Rx';
  

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public data = {}; username;password;

  constructor(public navCtrl: NavController,
      public http: Http,
      public alertCtrl: AlertController,
      public events: Events
   // public  NavParams   
     
      ) {      
      if(localStorage.getItem("username")!=null && localStorage.getItem("password")!=null){
       this.username=localStorage.getItem("username");
        this.data = {
          email: localStorage.getItem("username"),
          password: localStorage.getItem("password")
          
        }
      } else{
        this.data = {
          email: "",
          password: ""
          
        
        }
      }
       
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

   forgtpwd() {
    this.navCtrl.push(ForgtpwdPage);
  }

 login(form) {   
     
        
 //alert(JSON.stringify(this.data));
     
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
    
      var data = {
        email: form.value.username,
        password: form.value.password,
        role:"buyer"
      }
      var Serialized = this.serializeObj(data);
      
      this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/loginuser', Serialized, options).map(res => res.json()).subscribe(response => {
       // this.Loading.dismiss();
        alert(JSON.stringify(response));
        console.log(response);
          localStorage.setItem("USER_DATA",JSON.stringify(response.userinfo));   
          alert(JSON.stringify( localStorage.getItem("USER_DATA")));
            this.events.publish('buyer', 'rahul');     
        if (response.status == true) {
            let alert = this.alertCtrl.create({
              title: 'Logged in',
              subTitle: response.message
          });
            alert.present();
            setTimeout(()=>alert.dismiss(),1500);
         
        
              this.navCtrl.push(GetstartPage);
        } else {
            let alert = this.alertCtrl.create({
              title: 'Invalid credentials',
               subTitle: response.msg
                       
         });
         
            alert.present();
            setTimeout(()=>alert.dismiss(),1500);
            this.navCtrl.push(GetstartPage);
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
