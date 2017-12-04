import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController  } from 'ionic-angular';
import { HotelfilterPage } from '../hotelfilter/hotelfilter';
import { PopoverPage } from '../popover/popover';
import { NotificationPage } from '../notification/notification';
import { LocationmapPage } from '../locationmap/locationmap';
import { ReservationtypePage } from '../reservationtype/reservationtype';

/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
  }
  HotelModal() {
    let modal = this.modalCtrl.create(HotelfilterPage);
    modal.present();
  }


  PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }

  ReservtypeModal() {
    let modal = this.modalCtrl.create(ReservationtypePage);
    modal.present();
  }

  notification(){
    this.navCtrl.push(NotificationPage);
  }
  locationmap(){
    this.navCtrl.push(LocationmapPage);
  }
}
