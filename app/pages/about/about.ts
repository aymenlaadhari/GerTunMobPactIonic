import {Component} from '@angular/core';
import {NavController,Loading,Modal, Platform, NavParams, ViewController, Alert} from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProduktListe} from '../home/produkteListe';
import {OberList} from '../about/oberList';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
  }

public openListBekleidung()
{
    this.navCtrl.push(OberList);
}

    public openListProdukt(type: string, name: string)
{
    this.navCtrl.push(ProduktListe, { type: type,name: name});
}
}
