import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ContactPerson } from "./claim-process";

@Injectable({
    providedIn: 'root'
})
export class ClaimProcessService {
    private _contactPersons: ContactPerson[] = [];
    process: any;
    contactPesonsObs$: Subject<any> = new Subject();
    constructor() {
        this.initProcess();
        this.initContactPersons();
    }

    initContact() {
        this.contactPesonsObs$.next(this._contactPersons);
    }

    contactPersons() {
        return this._contactPersons;
    }

    addToContactPersons(newPerson: any) {
        const newContactPerson: ContactPerson = this.createContact(newPerson);
        this._contactPersons.push(newContactPerson);
        this.contactPesonsObs$.next(this._contactPersons);

    }

    removeConstactPersons() {
        this._contactPersons = [];
        this.contactPesonsObs$.next([]);
    }

    resetConstactPersons() {
        const person = this._contactPersons[0];
        this._contactPersons = [person];
        this.contactPesonsObs$.next(this._contactPersons);
    }

    initProcess() {
        this.process = {
            processType: "AMBULATORY_HEALTH_CLAIM",
            processStatus: 1,
            superClaim: {
                inquiryPorcessFlag: true,
                irregularSuperClaimFlag: false,
                pensionFollowUpForInsuredType: 0,
                superClaimStatus: {
                    code: 1,
                    value: "פתוחה"
                },
                deathAfterDisabilityFlag: false,
                operativeClaims: [
                    {
                        operativeClaimNum: 123,
                        company: 2,
                        claimStatus: {
                            code: 2,
                            value: "פתוחה"
                        },
                        coverages: [
                            {
                                coverageNum: 1,
                                claimParticipating: false
                            },
                            {
                                coverageNum: 2,
                                claimParticipating: false
                            }
                        ]
                    }, {
                        operativeClaimNum: 24531,
                        company: 1,
                        claimStatus: {
                            code: 1,
                            value: "מבוטלת"
                        },
                        coverages: [
                            {
                                coverageNum: 1,
                                claimParticipating: true
                            },
                            {
                                coverageNum: 2,
                                claimParticipating: false
                            }
                        ]
                    }
                ]
            },
            insured: {
                companyEmployer: true,
                position: "פקיד",
                identity: 27854122145,
                firstName: "מריה",
                lastName: "ג'יין",
                age: 35,
                lastJobDescription: "כללי - מקפת",
                smokingCode: 0,
                email: "NIKITA_JAIN@AMAT.COM",
                address: {
                    cityName: "רעננה",
                    streetName: "אחוזה",
                    cellPhone: 544485236
                }
            },

        }
    }

    initContactPersons() {
        this._contactPersons = [
            {
                id: 1,
                deliveryFlag: true,
                type: {
                    code: 1,
                    value: "מבוטח"
                },
                firstName: "ניקיטה",
                lastName: "ג'יין",
                identity: 278545412,
                address: {
                    homeNumber: 9,
                    cityName: "רחובות",
                    streetName: "אופנהיימר"
                },
                cellPhone: 525816206,
                email: "NIKITA_JAIN@AMAT.COM"
            },
            {
                id: 2,
                deliveryFlag: false,
                type: {
                    code: 21,
                    value: "סוכן"
                },
                firstName: "טוביה",
                lastName: "בצקי",
                identity: 433974846,
                address: {
                    cityName: "מחנה תל נוף",
                },
                cellPhone: 525452206,
            }
        ]
    }



    createContact(person: any): ContactPerson {
        return {
            id: this._contactPersons.length,
            deliveryFlag: this._contactPersons[this._contactPersons.length - 1] ? this._contactPersons[this._contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 1,
                value: "מבוטח"
            },
            firstName: person.firstName,
            lastName: person.lastName,
            identity: person.identity,
            address: {
                cityName: person.address.cityName,
                streetName: person.address.streetName
            },
            cellPhone: person.cellPhone,
            email: person.email
        };
    }

    checkIfParticipatingClaim(claim: any) {
        return claim.coverages.find((coverage: any) => {
            return coverage.claimParticipating;
        });
    }

}