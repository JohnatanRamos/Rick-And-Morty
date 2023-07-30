import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEpisode } from '../interfaces/IEpisode.interface';

@Component({
  selector: 'app-view-episode',
  templateUrl: './view-episode.component.html',
  styleUrls: ['./view-episode.component.scss']
})
export class ViewEpisodeComponent {
  data: IEpisode = inject(MAT_DIALOG_DATA);
}
