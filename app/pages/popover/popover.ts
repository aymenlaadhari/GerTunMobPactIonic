import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/popover/popoverTemplate.html'
})
export class Popover {

  constructor(private navCtrl: NavController,private http: Http) {
    //this.presentLoading();


  }
public mailto(email:string) {
   window.open(`mailto:${email}`, '_system');
}

public callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
