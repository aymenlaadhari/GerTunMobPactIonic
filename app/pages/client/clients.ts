import {Component} from '@angular/core';
import {NavController, Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ClientDetails} from '../client/clientDetails';
import {Clients} from '../model/client';

@Component({
    templateUrl: 'build/pages/client/clientList.html'
})
export class Client {
    clientsFeed: Array<any>;
    clients: Array<Clients>;
    filteredClients: Array<Clients>;
    newClient: Clients;

    constructor(private navCtrl: NavController, private http: Http) {

        this.clients = [];
        this.filteredClients = [];
        this.presentLoading();
        this.getClientByCountries('ALG');
    }
    public presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 3000
        });
        this.navCtrl.present(loading);
        this.loadData();
    }

    loadData() {
        this.http.get('https://newmobpact.firebaseapp.com/img/clients.json').map(res => res.json()).subscribe(data => {
            // TypeScript
            this.clientsFeed = data.Clients;
            for (let i = 0; i < this.clientsFeed.length; i++) {
                this.newClient = new Clients(this.clientsFeed[i].name, this.clientsFeed[i].description, this.clientsFeed[i].image, this.clientsFeed[i].country, this.clientsFeed[i].products, this.clientsFeed[i].revenues);
                this.clients.push(this.newClient);
                console.log(this.clients[i]);
            }
            console.log(this.clients.length);
            
        });
    }


    public openClientDetails(client: Clients) {
        this.navCtrl.push(ClientDetails, { client: client });
    }

    public getClientByCountries(country: string) {
        //this.filteredClients = this.clients.filter((client: Clients) => client.country == country);
        this.filteredClients = this.clients.filter((client) => client.country === country );
        
    }
}
