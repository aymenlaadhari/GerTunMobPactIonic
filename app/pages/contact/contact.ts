import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  posts: any;
  constructor(private navCtrl: NavController,private http: Http) {
    this.presentLoading();

  }

  loadData()
  {
    this.http.get('https://newmobpact.firebaseapp.com/img/artikels.json').map(res => res.json()).subscribe(data => {
        this.posts = data.Hauben;
    });
  }

  public presentLoading() {
  let loading = Loading.create({
    content: "Please wait...",
    duration: 3000
  });
  this.navCtrl.present(loading);
  this.loadData();

}

}
