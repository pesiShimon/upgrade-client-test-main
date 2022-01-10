import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactPerson } from '../claim-process';
import { ClaimProcessService } from '../claim-process.service';

@Component({
  selector: 'app-contact-person-tabel',
  templateUrl: './contact-person-tabel.component.html',
  styleUrls: ['./contact-person-tabel.component.scss']
})

export class ContactPersonTabelComponent implements OnInit {
    contactPersons: any[]= [];

    @Output() updateContactsCount = new EventEmitter<number>();

    constructor(private processService: ClaimProcessService) {
    }

    ngOnInit() {
        this.processService.contactPesonsObs$.subscribe(data => {
            this.contactPersons = data;
            this.updateContactsCount.emit(this.contactPersons?.length)
        }) 
        this.processService.initContact();
    }

    isAmbulatoryProcess() {
        return this.processService.process.processType === "AMBULATORY_HEALTH_CLAIM" || this.processService.process.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
    }

    contactIsInsured(contactPerson:ContactPerson) {
        return contactPerson.type?.code === ContactPersonType.INSURED;
    }

    isInsuredInHealthClaim(contactPerson: ContactPerson) {
        return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
    };

    addNewContactPerson() {
        const newPerson = {
            type : {
                code : 5,
                value : "שאר"
            },
            firstName : "ישראל",
            lastName : "ישראלי",
            identity : 278545412,
            address : {
                homeNumber : 9,
                cityName : "רחובות",
                streetName : "אופנהיימר"
            },
            cellPhone : 525816206,
            email : "NIKITA_JAIN@AMAT.COM"
        }
         this.processService.addToContactPersons(newPerson);
    }

  
}

export enum ContactPersonType {
    INSURED = 1,
    AGENT = 2,
    EMPLOYER = 5,
    ADVOCATE = 19,
    COMMISSIONED = 20,
    OTHER = 21,
    SURVIVOR = 22
}
