import { Component, ElementRef, ViewChild } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Input} from "@angular/core/src/metadata/directives";
import {GoogleMaps} from "../../../../providers/google-maps.service";

@Component({
    selector: 'page-sedii-harta',
    templateUrl: './sedii-harta.html'
})
export class SediiHartaPage {

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

    coords: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public maps: GoogleMaps, public platform: Platform) {
        this.coords = this.navParams.get('coords');
    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {

            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);

        });
    }

}
