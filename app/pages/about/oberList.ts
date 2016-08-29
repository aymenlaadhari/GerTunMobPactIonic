import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProduktListe} from '../home/produkteListe';


@Component({
    templateUrl: './build/pages/about/oberbekleidung.html'
})
export class OberList {

    constructor(private navCtrl: NavController) {
    }

    public openListProdukt(type: string,name:string) {
        
        this.navCtrl.push(ProduktListe,{
            type: type,
            name: name
          });
    }
}