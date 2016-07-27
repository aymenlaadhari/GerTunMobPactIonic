import {Component} from '@angular/core';
import {NavController,Loading,Modal, Platform, NavParams, ViewController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProduktListe} from '../home/produkteListe';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
  }

public openListProdukt()
{
  this.navCtrl.push(ProduktListe);
}

  public presentLoading() {
  let loading = Loading.create({
    content: "Please wait...",
    duration: 3000
  });
  this.navCtrl.present(loading);
}
}
