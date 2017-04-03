import { Component } from '@angular/core';

import {TestService} from '../../services/test.service';
import {Test} from '../../DAO/Test';

@Component({
  moduleId: module.id,
  selector: 'tests',
  templateUrl: 'tests.component.html'
})

export class TestsComponent { 
    tests: Test[];
    title: string;
    
    constructor(private testService:TestService){
        this.testService.getTests()
            .subscribe(tests => {
                this.tests = tests;
            });
    }
}
