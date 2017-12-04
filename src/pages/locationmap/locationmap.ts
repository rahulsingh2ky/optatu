import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the LocationmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-locationmap',
  templateUrl: 'locationmap.html',
})
export class LocationmapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationmapPage');
  }

   PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }
  notification(){
    this.navCtrl.push(NotificationPage);
  }

}
