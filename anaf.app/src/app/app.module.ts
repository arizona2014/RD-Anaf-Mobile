import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {
    HomePage,
    ContactPage,
    ContactSediiPage,
    SediiHartaPage,
    ContactSesizarePage,
    AsistentaPage,
    InstrumentePage,
    InfoPage,
    TablouPage,
    InstrumenteVerificareCifPage,
    InstrumenteCalculatorVenitPage,
    InstrumenteCalculatorTaxaAutoPage,
    InstrumenteCalculatorTvaPage,
    RssFeedComponent,
    RssFeedItemComponent
} from './pages/index';
import { RssService } from './providers/rss.service';
import { RSS_CHANNEL_LIST_TOKEN, RSS_CHANNEL_LIST } from './shared/config';
import {SediiService} from "./providers/sedii.service";
import {Connectivity} from "./providers/connectivity.service";
import {GoogleMaps} from "./providers/google-maps.service";
/*import {AboutPage} from "./pages/about/about.component";*/

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ContactPage,
        ContactSediiPage,
        SediiHartaPage,
        ContactSesizarePage,
        AsistentaPage,
        InstrumentePage,
        InfoPage,
        TablouPage,
        InstrumenteVerificareCifPage,
        InstrumenteCalculatorVenitPage,
        InstrumenteCalculatorTaxaAutoPage,
        InstrumenteCalculatorTvaPage,
        RssFeedComponent,
        RssFeedItemComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp,{
            platforms: {
                ios: {
                    backButtonText: ''
                }
            }
        },{}
    )],
    bootstrap: [IonicApp],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        RssService,
        { provide: RSS_CHANNEL_LIST_TOKEN, useValue: RSS_CHANNEL_LIST }, //required for RSS Channel List configuration
        SediiService,
        Connectivity,
        GoogleMaps
    ],
    entryComponents: [
        HomePage,
        ContactPage,
        ContactSediiPage,
        SediiHartaPage,
        ContactSesizarePage,
        AsistentaPage,
        InstrumentePage,
        InfoPage,
        TablouPage,
        InstrumenteVerificareCifPage,
        InstrumenteCalculatorVenitPage,
        InstrumenteCalculatorTaxaAutoPage,
        InstrumenteCalculatorTvaPage
    ]
})
export class AppModule {
}