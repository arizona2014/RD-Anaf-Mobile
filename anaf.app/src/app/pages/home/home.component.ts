import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about.component';
import { ContactPage } from '../contact/contact.component';
import { AsistentaPage } from '../asistenta/asistenta.component';

@Component({
    templateUrl: 'home.component.html'
})
export class HomePage {

    constructor(private navController: NavController) {
    }

    about() {
        this.navController.push(AboutPage);
    }

    contact() {
        this.navController.push(ContactPage);
    }

    help() {
        this.navController.push(AsistentaPage);
    }

    onLink(url: string) {
        window.open(url);
    }
}
