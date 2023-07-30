import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';


@NgModule({
  declarations: [
    ListCharactersComponent,
    ViewCharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    TitleModalComponent,
    ButtonsModalComponent,
    NotFoundComponent
  ]
})
export class CharacterModule { }
