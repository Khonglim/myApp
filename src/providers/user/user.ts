import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  getUser(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data =>{
         resolve(data);
      },error =>{
        reject(error);
      })
    });

  }
}
