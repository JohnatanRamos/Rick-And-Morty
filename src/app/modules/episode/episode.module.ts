import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewEpisodeComponent } from './view-episode/view-episode.component';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';


@NgModule({
  declarations: [
    ListEpisodesComponent,
    ViewEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SharedModule,
    TitleModalComponent,
    ButtonsModalComponent
  ]
})
export class EpisodeModule { }
