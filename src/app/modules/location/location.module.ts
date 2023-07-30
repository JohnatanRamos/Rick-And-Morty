import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LocationModule { }
