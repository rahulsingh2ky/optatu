import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';
import { NotificationPage } from '../notification/notification';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public viewCtrl: ViewController, public popoverCtrl: PopoverController) {

  }

  hotels(){
    this.navCtrl.push(HotelsPage);
  }

  notification(){
    this.navCtrl.push(NotificationPage);
  }


  PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }



}
