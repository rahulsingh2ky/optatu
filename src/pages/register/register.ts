import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController } from 'ionic-angular';
 import 'rxjs/add/operator/map'
  import 'rxjs/Rx';
  import { Http, Headers, RequestOptions } from '@angular/http';
import { SigninPage } from '../signin/signin';


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public http: Http,
              private alertCtrl: AlertController,public loadingCtrl:LoadingController,
              ){

  }
  public data = {};
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  
  home(){
          console.log("asda");
          this.navCtrl.push(SigninPage);    
}

  reg(signup){
    console.log(signup.value);
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
  if(signup.value.email.indexOf(' ') >= 0 || signup.value.password.indexOf(' ') >=0 ){
        let alert = this.alertCtrl.create({
              title : "Sign Up",
              subTitle: "Spaces Not allowed",
              buttons : ['OK']

        })
              alert.present();
              setTimeout(()=> alert.dismiss(),5000 );
      }
      else if(signup.value.fname.indexOf(' ') == 0){
        let alert = this.alertCtrl.create({
          title: 'Signup',
          subTitle: "Space not allowed in name",
          buttons: ['ok'],
        });
      alert.present();
      setTimeout(()=>alert.dismiss(),1500);
      }
      else if(signup.value.lname.indexOf(' ') == 0){
        let alert = this.alertCtrl.create({
          title: 'Signup',
          subTitle: "Space not allowed in name",
          buttons: ['ok'],
        });
      alert.present();
      setTimeout(()=>alert.dismiss(),1500);

      } else if(signup.value.password === signup.value.cpassword){
           this.Loading.present();
        var data = {
        address : signup.value.address,
        gender: signup.value.gender,
        first_name : signup.value.fname,
        birth_day : signup.value.date,              
        last_name : signup.value.lname,
        emailid : signup.value.email,
        password : signup.value.password,
        phone: signup.value.phone,
        role: 'buyer'
      }
       var Serialized = this.serializeObj(data);
       this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/registration', Serialized, options).map(res => res.json()).subscribe(response => {
             console.log(response); 
             this.Loading.dismiss();
           if(response.status == true){         
            localStorage.setItem("USER_DATA", JSON.stringify(response.user_data));
          let alert = this.alertCtrl.create({
            title: 'Sign Up',
            subTitle: 'You are successfully Registered !',
            buttons: ['ok'],
          });
          alert.present(); 
            this.navCtrl.push(SigninPage);          
  }
    })
  }
  else { console.log("asdsad");
    let alert = this.alertCtrl.create({
      title: 'Signup',
      subTitle: 'Password did not match',
      buttons: ['ok'],
    });
    alert.present();
    setTimeout(() => alert.dismiss(), 2500);
  }

}
  serializeObj(obj){
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
   

}
