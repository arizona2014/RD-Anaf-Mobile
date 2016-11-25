import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
    templateUrl: 'home.html'
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

    onLink(url: string) {
        window.open(url);
    }
}
