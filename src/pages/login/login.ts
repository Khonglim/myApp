import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RegisterPage } from '../register/register';
import 'rxjs/add/operator/map';

import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("username") username;

  @ViewChild("password") password;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public http:Http,public loading:LoadingController) {
  }

  signUp(){

    this.navCtrl.push(RegisterPage);
  }
  signIn() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {

        let alert = this.alertCtrl.create({

            title: "ATTENTION",

            subTitle: "Username field is empty",

            buttons: ['OK']

        });

        alert.present();

    } else

        if (this.password.value == "") {

            let alert = this.alertCtrl.create({

                title: 'ATTENTION',

                subTitle: 'Password field is empty',

                buttons: ['OK']

            });

            alert.present();

        }

        else {

            var headers = new Headers();

            headers.append("Accept", 'application/json');

            headers.append('Content-Type', 'application/json');

            let options = new RequestOptions({ headers: headers });

            let data = {

                username: this.username.value,

                password: this.password.value

            };

            let loader = this.loading.create({

                content: 'Processing please wait…',

            });

            loader.present().then(() => {

                this.http.post('http://127.0.0.1/servicephp/login.php', data, options)

                    .map(res => res.json())

                    .subscribe(res => {

                        console.log(res)

                        loader.dismiss()

                        if (res == "Your Login success") {

                         /*   let alert = this.alertCtrl.create({

                                title: "CONGRATS",

                                subTitle: (res),

                                buttons: ['OK']

                            }); 

                            alert.present();*/
                            this.navCtrl.setRoot(TabsPage);
                        } else {

                            let alert = this.alertCtrl.create({

                                title: 'ERROR',

                                subTitle: 'Your Login Username or Password is invalid',

                                buttons: ['OK']

                            });

                            alert.present();

                        }

                    });

            });

        }

}

}
