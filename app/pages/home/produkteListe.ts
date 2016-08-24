import {Component} from '@angular/core';
import {NavController,Platform, Loading, ActionSheet} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
    templateUrl: 'build/pages/home/produkteListe.html'
})
export class ProduktListe {
    posts: any;

  constructor(private navCtrl: NavController,public platform: Platform, private http: Http) {

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

 pressEvent(e) {
    this.openMenu();
 }
 
 openMenu() {
    let actionSheet = ActionSheet.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Options',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Color',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    this.navCtrl.present(actionSheet);
  }

}
