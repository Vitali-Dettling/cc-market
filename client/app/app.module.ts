import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule}      from '@angular/http';
import {FormsModule}     from '@angular/forms';

import {AppComponent}    from './app.component';
import {TasksComponent}  from './components/tasks/tasks.component';
import {TestsComponent}  from './components/tests/tests.component';
import {TickersComponent}  from './components/tickers/tickers.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TestsComponent, TasksComponent, TickersComponent ],
  bootstrap:    [ AppComponent]
})

export class AppModule { }
