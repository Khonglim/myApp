import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ListPage } from '../list/list';
import { AboutPage } from '../about/about';
import { AccountPage } from '../account/account';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabs1:any;
  tabs2:any;
  tabs3:any;
  tabs4:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs1 = HomePage;
    this.tabs2 = ListPage;
    this.tabs3 = AboutPage;
    this.tabs4 = AccountPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
