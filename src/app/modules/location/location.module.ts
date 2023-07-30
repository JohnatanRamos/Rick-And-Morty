import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewLocationComponent } from './view-location/view-location.component';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';


@NgModule({
  declarations: [
    ListLocationsComponent,
    ViewLocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule,
    TitleModalComponent,
    ButtonsModalComponent
  ]
})
export class LocationModule { }
