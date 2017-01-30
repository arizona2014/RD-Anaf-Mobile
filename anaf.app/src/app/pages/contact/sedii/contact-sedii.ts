import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SediiHartaPage} from "./harta/sedii-harta";
import {SediiService} from "../../../providers/sedii.service";

@Component({
  selector: 'page-contact-sedii',
  templateUrl: 'contact-sedii.html'
})
export class ContactSediiPage {

  private sedii: any;
  private sedii_err: any;

  constructor(public navCtrl: NavController, private sediiService: SediiService) {

    this.sediiService.getAllSedii().subscribe(
        data => {
          this.sedii = data
        },
        err => { this.sedii_err = true }
    )



  }

  ionViewDidLoad() {
    //console.log('Hello ContactSediiPage Page');
  }

  vizualizare(sediu: any) {
    this.navCtrl.push(SediiHartaPage, {coords: sediu.coords});
  }

}
