import {Component} from '@angular/core';
import {NavController,Loading,Modal, Platform, NavParams, ViewController, Alert} from 'ionic-angular';
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

openModal(characterNum,navCtrl) {

    let modal = Modal.create(ModalsContentPage, characterNum);
    this.navCtrl.present(modal);
  }

}

@Component({
  templateUrl: 'build/pages/about/modal-content.html'
})
class ModalsContentPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController,
      private navCtrl: NavController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  public openListProdukt()
{
  this.navCtrl.push(ProduktListe);
}
}
