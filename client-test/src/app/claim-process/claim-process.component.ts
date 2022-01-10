import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClaimProcessService } from './claim-process.service';

@Component({
  selector: 'app-claim-process',
  templateUrl: './claim-process.component.html',
  styleUrls: ['./claim-process.component.scss']
})
export class ClaimProcessComponent implements OnInit {
    process: any;
    contactsCount: number = 0;

    constructor(private processService: ClaimProcessService) {}

    ngOnInit() {
        this.initData();
    }

    initData() {
        this.process =  this.processService.process;
    }

    isCompanyEmployer() {
        if(!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
            return '';
        }else{
            return 'עובד חברה - ' + this.process.insured.position;
        }
    }

    updateContactsCount(count: number) {
        this.contactsCount = count;
    }

    addInsuredToConstactPersons() {
        this.processService.addToContactPersons(this.process.insured);
    }

    removeConstactPersons() {
        this.processService.removeConstactPersons();
    }

    resetConstactPersons() {
        this.processService.resetConstactPersons();
    }
    
}
