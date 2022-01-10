import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClaimProcessService } from '../claim-process.service';

@Component({
  selector: 'app-claim-process-header',
  templateUrl: './claim-process-header.component.html',
  styleUrls: ['./claim-process-header.component.scss']
})
export class ClaimProcessHeaderComponent implements OnInit {
  @Input() superClaim: any; 
  statusProcess = 'בירור';
  canceledClaimStatus = 2;


    constructor(private processService: ClaimProcessService) {}

    ngOnInit() {

    }

    processRefresh() {
      this.statusProcess = 'חריגה';
    }

    getClaims() {
      if (!this.superClaim || !this.superClaim.operativeClaims) { return ''; }
      const ParticipatingClaims = this.getParticipatingClaims(this.superClaim.operativeClaims)
      return ParticipatingClaims ? ParticipatingClaims.map((claim: any) => {
          return claim.company + "-" + claim.operativeClaimNum;
      }).join(",") : "אין תביעות משתתפות";
  }

  getParticipatingClaims(operativeClaims: any) {
    return operativeClaims.filter((claim: any) => {
        return claim.claimStatus.code !== this.canceledClaimStatus &&  this.processService.checkIfParticipatingClaim(claim);
    })
}

    
}
