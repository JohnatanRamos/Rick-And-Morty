import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatDialogModule } from '@angular/material/dialog';

const arrayComponents = [FilterComponent,
  SortComponent,
  PaginationComponent];

@NgModule({
  declarations: [
    ...arrayComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...arrayComponents,
    MatDialogModule
  ]
})
export class SharedModule { }
