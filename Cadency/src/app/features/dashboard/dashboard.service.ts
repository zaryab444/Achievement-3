import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from './dashboard';

@Injectable()
export class DashboardService {

    constructor() { }
    config: Config = {
        theme: 'lara-light-blue',
        dark: false,
        inputStyle: 'outlined',
        ripple: true
    };

    private configUpdate = new Subject<Config>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: Config) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }

    getProductsSmall() {
       
    }
}