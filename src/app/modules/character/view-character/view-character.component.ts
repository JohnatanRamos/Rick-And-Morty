import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICharacter } from '../interfaces/ICharacter.interface';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent {
  data: ICharacter = inject(MAT_DIALOG_DATA);
  typeStatus: any = {
    Dead: 'Muerto',
    Alive: 'Vivo',
    unknown: 'Desconocido'
  };
}
