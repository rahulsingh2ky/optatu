import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events } from 'ionic-angular';
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





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  @ViewChild(Nav) nav: Nav;
  username;
  

  rootPage: any = SigninPage;

  pages: Array<{title: string, component: any, icon : string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
       this.events.subscribe('buyer', data => {
           console.log('gfdgfghf');
           console.log(data);
            this.username = JSON.parse(localStorage.getItem("USER_DATA"));
              console.log(this.username.email);
           
       })
      
this.initializeApp();

//     if ((localStorage.getItem("USER_DATA")!=null)){  
//            alert("userdata");
//         
//        this.username = JSON.parse(localStorage.getItem("USER_DATA"));
//              console.log(this.username.email);
//        }

    // used for an example of ngFor and navigation    
    this.pages = [
      { title: 'SIGN IN OR CREATE ACCOUNT', component: SigninPage, icon: 'person' },
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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    
    
    
  }
 
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     
         
       
        
        
    this.nav.setRoot(page.component);
  }
}
