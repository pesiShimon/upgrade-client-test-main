import { Pipe } from "@angular/core";

@Pipe({
    name: "phone"
  })
  export class PhoneFormatPipe {
    transform(rawNum: any) {
      rawNum = "0" + rawNum;
      return rawNum.slice(0,3) + '-' + rawNum.slice(3);
    }
  }
  