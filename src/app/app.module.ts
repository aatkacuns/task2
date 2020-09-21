import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseComponent } from './houses/house/house.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseService } from './shared/house.service';
import { FlatsComponent } from './flats/flats.component';
import { FlatComponent } from './flats/flat/flat.component';
import { FlatListComponent } from './flats/flat-list/flat-list.component';
import { FlatService } from './shared/flat.service';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseComponent,
    HouseListComponent,
    routingComponents,
    FlatsComponent,
    FlatComponent,
    FlatListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HouseService, FlatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
