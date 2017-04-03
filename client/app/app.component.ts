import { Component } from '@angular/core';

import {TaskService} from './services/task.service';
import {TestService} from './services/test.service';
import {TickerService} from './services/ticker.service';

@Component({
  moduleId: module.id,
  selector: 'cc-app',
  templateUrl: 'app.component.html',
  providers:[TaskService, TestService, TickerService]
})

export class AppComponent { }
