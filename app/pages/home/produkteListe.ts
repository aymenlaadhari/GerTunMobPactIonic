import {Component} from '@angular/core';
import {NavController,Platform} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/home/produkteListe.html'
})
export class ProduktListe {

  constructor(private navCtrl: NavController,public platform: Platform) {

  }


}
