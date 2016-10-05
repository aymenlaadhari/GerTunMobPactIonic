import {Component} from '@angular/core';
import {NavController,Loading,NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Artikel} from '../model/artikel';

@Component({
  templateUrl: 'build/pages/home/productDetails.html'
})
export class ProductDetails {
    public artikel: Artikel;

  constructor(private navCtrl: NavController,private http: Http,params: NavParams) {
      this.artikel = params.get('artikel');


  }

}
