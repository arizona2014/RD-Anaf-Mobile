import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Sedii provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SediiService {

    sedii: any;

    constructor(public http: Http) { }

    getAllSedii = () => {
        return this.http.get('assets/data/sedii.json').map((res:Response) => res.json());
    };

}
