import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TickerService{
    constructor(private http:Http){
        console.log('Ticker Service Initialized...');
    }
    
    getTickers(){
        return this.http.get('/api/ticker')
            .map(res => res.json());
    }
}