import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimProcessHeaderComponent } from './claim-process/claim-process-header/claim-process-header.component';
import { ClaimProcessComponent } from './claim-process/claim-process.component';
import { ContactPersonTabelComponent } from './claim-process/contact-person-tabel/contact-person-tabel.component';
import { ButtonComponent } from './shared/components/button/button.componet';
import { PhoneFormatPipe } from './shared/pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClaimProcessHeaderComponent,
    ContactPersonTabelComponent,
    ClaimProcessComponent,
    ButtonComponent,
    PhoneFormatPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
