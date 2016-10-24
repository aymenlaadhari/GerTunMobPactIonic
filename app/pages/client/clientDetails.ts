import {Component} from '@angular/core';
import {NavController, Loading, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Clients} from '../model/client';

@Component({
    templateUrl: 'build/pages/client/clientDetails.html'
})
export class ClientDetails {
    public client: Clients;

    constructor(private navCtrl: NavController, private http: Http, params: NavParams) {
        this.client = params.get('client');

    }

}
