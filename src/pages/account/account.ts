import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App ,Events, LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  account: Array<any>;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public app: App ,
     public events: Events,
     public loadingController: LoadingController
    
    ){
      this.account = this.navParams.get('item');
    }
    ionViewWillEnter(){
      let loading =  this.loadingController.create({
          content:"Loading...",
          spinner:"circles"
        });
        loading.present();
      
            loading.dismiss();
          
     
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  goLogin(){
    let loading =  this.loadingController.create({
      content:"Loading...",
      spinner:"circles"
    });
    loading.present();
     this.navCtrl.setRoot(LoginPage);
     let nav = this.app.getRootNav();
     loading.dismiss();
     nav.setRoot(LoginPage);
     
}
}
