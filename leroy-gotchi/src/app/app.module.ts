import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoutteComponent } from './goutte/goutte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from "@angular/forms";
import { AchatComponent } from './achat/achat.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { LivraisonComponent } from './livraison/livraison.component';
import { RecapComponent } from './recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    GoutteComponent,
    AchatComponent,
    LivraisonComponent,
    RecapComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatStepperModule,
        ReactiveFormsModule,
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
