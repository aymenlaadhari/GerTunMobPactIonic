/// <reference path="../typings/modules/firebase/index.d.ts" />
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
//import * as firebase from 'firebase';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;
    
    var config = {
    apiKey: "AIzaSyB_ulmLDR688L2WUG-bixTfh_zWWVr5Czs",
    authDomain: "iionicfirebase.firebaseapp.com",
    databaseURL: "https://iionicfirebase.firebaseio.com",
    storageBucket: "iionicfirebase.appspot.com",
  };
//  firebase.initializeApp(config);
//  
//   firebase.auth().onAuthStateChanged((user) => {
//      if (user) {
//        this.rootPage = TabsPage;
//      } else {
//        this.rootPage = LoginPage;
//      }
//    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
