import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { PaginationComponent } from './pagination/pagination.component';

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
    ...arrayComponents
  ]
})
export class SharedModule { }
