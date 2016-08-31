import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/client/clientDetails.html'
})
export class ClientDetails {

  constructor(private navCtrl: NavController,private http: Http) {


  }

}
