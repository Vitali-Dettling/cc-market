import { Component } from '@angular/core';

import {TickerService} from '../../services/ticker.service';
import {Ticker} from '../../DAO/Ticker';

@Component({
  moduleId: module.id,
  selector: 'tickers',
  templateUrl: 'tickers.component.html'
})

export class TickersComponent { 
    tickers: Ticker[];
    XXBTZUSD: any;
    
    constructor(private tickerService:TickerService){
        this.tickerService.getTickers()
            .subscribe(tickers => {
                this.tickers = tickers;
            });
    }
}
