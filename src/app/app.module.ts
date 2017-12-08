import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { Appsetting } from '../providers/appsetting';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GetstartPage } from '../pages/getstart/getstart';
import { HotelsPage } from '../pages/hotels/hotels';
import { HotelfilterPage } from '../pages/hotelfilter/hotelfilter';
import { NotificationPage } from '../pages/notification/notification';
import { PopoverPage } from '../pages/popover/popover';
import { LocationmapPage } from '../pages/locationmap/locationmap';
import { ReservationtypePage } from '../pages/reservationtype/reservationtype';
import { ReservationstatusPage } from '../pages/reservationstatus/reservationstatus';
import { MyreservationPage } from '../pages/myreservation/myreservation';
import { Recently_viewPage } from '../pages/recently_view/recently_view';
import { SettingPage } from '../pages/setting/setting';
import { Legal_disclmerPage } from '../pages/legal_disclmer/legal_disclmer';
import { Modal_rservPage } from '../pages/modal_rserv/modal_rserv';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { ForgtpwdPage } from '../pages/forgtpwd/forgtpwd';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
   MyApp,
    HomePage,
    ListPage,
    HotelsPage,
    HotelfilterPage,
    PopoverPage,
    NotificationPage,
    LocationmapPage,
    ReservationtypePage,
    ReservationstatusPage,
    MyreservationPage,
    GetstartPage,
    Recently_viewPage,
    SettingPage,
    Legal_disclmerPage,
    Modal_rservPage,
    SigninPage,
    RegisterPage,
    ForgtpwdPage,
    MyprofilePage,
    EditprofilePage,
    ChangepwdPage,
    HelpPage,
    TermsPage,
    PrivacypolicyPage,



    


  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HotelsPage,
    HotelfilterPage,
    PopoverPage,
    NotificationPage,
    LocationmapPage,
    ReservationtypePage,
    ReservationstatusPage,
    MyreservationPage,
    GetstartPage,
    Recently_viewPage,
    SettingPage,
    Legal_disclmerPage,
    Modal_rservPage,
    SigninPage,
    RegisterPage,
    ForgtpwdPage,
    MyprofilePage,
    EditprofilePage,
    ChangepwdPage,
    HelpPage,
    TermsPage,
    PrivacypolicyPage,




  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
