import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Modal_rservPage } from '../modal_rserv/modal_rserv';

/**
 * Generated class for the MyreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myreservation',
  templateUrl: 'myreservation.html',
})
export class MyreservationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyreservationPage');
  }
   reservModal() {
    let modal = this.modalCtrl.create(Modal_rservPage);
    modal.present();
  }

}
