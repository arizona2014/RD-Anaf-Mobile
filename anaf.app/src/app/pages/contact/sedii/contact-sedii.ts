import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SediiHartaPage} from "./harta/sedii-harta";
import {SediiService} from "../../../providers/sedii.service";

@Component({
  selector: 'page-contact-sedii',
  templateUrl: 'contact-sedii.html'
})
export class ContactSediiPage {

  sedii: any;
  sedii_err: any;

  constructor(public navCtrl: NavController, private sediiService: SediiService) {

    /*this.sedii = [
      {titlu: "Anaf Sector 1", adresa: "Blv. Magheru, Bucuresti", telefon: "0123456789", distanta: "3.5", coords: "100.3, 11.4"},
      {titlu: "Anaf Sector 2", adresa: "Piata Romana, Bucuresti", telefon: "3216549870", distanta: "9.5", coords: "200.3, 21.4"},
      {titlu: "Anaf Sector 3", adresa: "Splaiul Independentei, Bucuresti", telefon: "9876543210", distanta: "12.5", coords: "300.3, 31.4"}
    ];*/

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
