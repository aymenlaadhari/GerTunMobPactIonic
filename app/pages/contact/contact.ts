import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  posts: any;
  email:string;
  passedNumber:string;
  constructor(private navCtrl: NavController,private http: Http) {
    //this.presentLoading();
    this.email = "aymenlaadhari@gmail.com";
    this.passedNumber="0021655258169"

  }
public mailto(email:string) {
   window.open(`mailto:${email}`, '_system');
}

public callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
