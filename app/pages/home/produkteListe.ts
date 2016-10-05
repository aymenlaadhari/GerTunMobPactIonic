import {Component} from '@angular/core';
import {NavController, Platform, Loading, ActionSheet, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import {Artikel} from '../model/artikel';
import {ProductDetails} from '../home/productDetails';

@Component({
    //templateUrl: 'build/pages/home/produkteListe.html'
    templateUrl: 'build/pages/home/productgrid.html'
})
export class ProduktListe {
    posts: Array<any>;
    type: string;
    name: string;
    newArtikel: Artikel;
    artikels: Array<Artikel>;
    grid: Array<Array<Artikel>>;


    constructor(private navCtrl: NavController, public platform: Platform, private http: Http, params: NavParams) {
        this.type = params.get("type");
        this.name = params.get("name");
        this.artikels = [];
        this.grid = Array(Math.ceil(this.artikels.length / 2));
        this.presentLoading();
    }

    loadGrid() {

        let rowNum = 0;


        for (let i = 0; i < this.artikels.length; i += 2) {

            this.grid[rowNum] = Array(2);

            if (this.artikels[i]) {
                this.grid[rowNum][0] = this.artikels[i]
            }
            if (this.artikels[i + 1]) {
                this.grid[rowNum][1] = this.artikels[i + 1]
            }
            rowNum++;
        }

    }
    
    loadData() {
        this.http.get('https://newmobpact.firebaseapp.com/img/artikels.json').map(res => res.json()).subscribe(data => {
            // TypeScript
            switch (this.type) {
                case "Hauben":

                    this.posts = data.Hauben;
                    break;
                case "Zwischen":
                    this.posts = data.Zwischen;
                    break;
                case "Jack":
                    this.posts = data.Jack;
                    break;
                case "Kittel":
                    this.posts = data.Kittel;
                    break;
                case "Overalls":
                    this.posts = data.Overalls;
                    break;
                case "Stief":
                    this.posts = data.Stief;
                    break;
                case "Handschuhe":
                    this.posts = data.Handschuhe;
                    break;
                case "Tapes":
                    this.posts = data.Tapes;
                    break;
                case "Tucher":
                    this.posts = data.Tucher;
                    break;
            }

            for (let i = 0; i < this.posts.length; i++) {
                this.newArtikel = new Artikel(this.posts[i].name, this.posts[i].description, this.posts[i].image,this.posts[i].nummer);
                this.artikels.push(this.newArtikel);
                console.log(this.artikels[i]);
            }
            console.log(this.artikels.length);
            this.loadGrid(); 
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
                        
                    }
                },
                {
                    text: 'Color',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        
                    }
                }
            ]
        });

        this.navCtrl.present(actionSheet);
    } 
     
    tapEvent(e,artikel:Artikel)
    {
        this.openDetails(artikel);
    }
    openDetails(artikel: Artikel)
    {
       this.navCtrl.push(ProductDetails,{ artikel: artikel}); 
    }
}
