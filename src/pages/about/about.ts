import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  
})
export class AboutPage {
  radeText: string;
  loca: string;
  lat1: number;
  lat2: number
  long1: number;
  Distance: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private geolocation: Geolocation,

  ) {
 





  }

  ionViewDidLoad() {
    this.radeText = "รอการแสกน";
    this.loca = "แสดงตำแหน่ง";
  }

  goScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.radeText = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      let p = 0.017453292519943295;    // Math.PI / 180
      let c = Math.cos;
      let a = 0.5 - c((13.707289 - resp.coords.latitude) * p) / 2 + c(resp.coords.latitude * p) * c((13.707289) * p) * (1 - c(((100.536131 - resp.coords.longitude) * p))) / 2;
      let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
      this.Distance = dis / 0.001;
      console.log('ระยะทาง กม.', dis);



    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }






}
