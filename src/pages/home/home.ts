import { Component } from '@angular/core';
import { NavController , LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { UserProvider } from '../../providers/user/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullname: string;
  age: number;
  other: any;
  userList: any;

  constructor(public navCtrl: NavController, 
    public userProvider: UserProvider, 
    public loadingController: LoadingController
    
    ) {
    this.fullname = 'myName';
  }
  goDetail(item) {
    this.navCtrl.push(DetailPage, { item: item });
  }
  ionViewWillEnter(){
  let loading =  this.loadingController.create({
      content:"Loading...",
      spinner:"circles"
    });
    loading.present();
    this.userProvider.getUser().then((data:any) =>{
        loading.dismiss();
        this.userList = data;
    });
  }
}
