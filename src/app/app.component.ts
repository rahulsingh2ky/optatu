import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events,LoadingController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { GetstartPage } from '../pages/getstart/getstart';
import { ListPage } from '../pages/list/list';
import { HotelfilterPage } from '../pages/hotelfilter/hotelfilter';
import { MyreservationPage } from '../pages/myreservation/myreservation';
import { Recently_viewPage } from '../pages/recently_view/recently_view';
import { SettingPage } from '../pages/setting/setting';
import { Legal_disclmerPage } from '../pages/legal_disclmer/legal_disclmer';
import { Modal_rservPage } from '../pages/modal_rserv/modal_rserv';
import { ForgtpwdPage } from '../pages/forgtpwd/forgtpwd';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
 import 'rxjs/Rx';

 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  @ViewChild(Nav) nav: Nav;
  username;
  prof;
  

  rootPage: any = SigninPage;

  pages: Array<{title: string, component: any, icon : string}>;

  constructor(public loadingCtrl: LoadingController,public http: Http,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    
    events.subscribe('rahul', (response) => {

         this.getuser();
         console.log("first subscribe");
    //  response.data.user_image;
    //   console.log(response.data);
    //   console.log("rahul"+ response.data.user_image);
    //   this.username = response.data;
   });

 //   this.prof =JSON.parse(localStorage.getItem("USER_DATA")).user_image;
    console.log("this.prof");
   

      
this.initializeApp();

//     if ((localStorage.getItem("USER_DATA")!=null)){  
//            alert("userdata");
//         
//        this.username = JSON.parse(localStorage.getItem("USER_DATA"));
//              console.log(this.username.email);
//        }

    // used for an example of ngFor and navigation    
    this.pages = [
    //  { title: 'SIGN IN OR CREATE ACCOUNT', component: SigninPage, icon: 'person' },
       { title: 'MY PROFILE', component: MyprofilePage, icon: 'contact' },
      { title: 'MY RESERVATION', component: MyreservationPage, icon: 'calendar' },
       { title: 'RECENTLY VIEWED', component: MyreservationPage, icon: 'eye' },
        { title: 'SETTINGS', component: MyreservationPage, icon: 'settings' },
         { title: 'LEGAL DISCLAIMER', component: MyreservationPage, icon: 'alert' },
          { title: 'SHARE THIS APP', component: MyreservationPage, icon: 'share-alt' }    
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      console.log("initapp");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    
    
    
  }

  getuser(){
    console.log(JSON.parse(localStorage.getItem('USER_DATA'))._id); 
   let headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
 let options = new RequestOptions({ headers: headers });
 var data = {
   id : JSON.parse(localStorage.getItem('USER_DATA'))._id

 }
 var Serialized = this.serializeObj(data);
 var Serialized = this.serializeObj(data);
 var Loading = this.loadingCtrl.create({
   spinner: 'bubbles',
   cssClass: 'loader'

});
 Loading.present().then(()=>
 this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/userinfo', Serialized, options).map(res => res.json()).subscribe(response => {
     console.log(response);
    
     this.username = response.data;
     this.prof = response.data.user_image;

   if (response.status != null){
        Loading.dismiss();
      }
    else{
      console.log("bad res ");
    }
 }))
}
serializeObj(obj) {
  var result = [];
  for (var property in obj)
    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

  return result.join("&");
}
  openPage(page) {
   
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  ionViewCanEnter() {
       console.log("can enter");   

  }
  ionViewDidLoad() {
    console.log("hello ionViewDidLoad");   
 }
 ionViewCanLeave() {
  console.log("hello ionViewCanLeave");   
}
 
       
  ionViewWillEnter() {
    console.log("hello ionViewWillEnter");   
 }
 ionViewDidEnter() {
  console.log("hello ionViewDidEnter");   
}
ionViewWillLeave() {
  console.log("hello ionViewWillLeave");   
}
ionViewDidLeave() {
  console.log("hello ionViewDidLeave");   
}

ionViewWillUnload	() {
    console.log("hello will ionViewWillUnload");   
 }




}
