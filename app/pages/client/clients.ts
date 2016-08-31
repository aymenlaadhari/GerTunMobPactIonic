import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ClientDetails} from '../client/clientDetails';

@Component({
  templateUrl: 'build/pages/client/clientList.html'
})
export class Client {

  constructor(private navCtrl: NavController,private http: Http) {


  }
  
  public openClientDetails()
{
    this.navCtrl.push(ClientDetails);
}

}
