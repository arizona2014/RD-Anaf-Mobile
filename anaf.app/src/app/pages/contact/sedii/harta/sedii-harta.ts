import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'page-sedii-harta',
    templateUrl: './sedii-harta.html'
})
export class SediiHartaPage {

    coords: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.coords = this.navParams.get('coords');
    }

    ionViewDidLoad() {
        //console.log('Hello ContactSediiPage Page');
    }

}
