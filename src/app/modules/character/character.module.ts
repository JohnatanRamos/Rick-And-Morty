import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CharacterModule { }
