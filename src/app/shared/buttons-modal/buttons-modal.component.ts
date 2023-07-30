import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-modal',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule],
  templateUrl: './buttons-modal.component.html',
  styleUrls: ['./buttons-modal.component.scss']
})
export class ButtonsModalComponent {

}
