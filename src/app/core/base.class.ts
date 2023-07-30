import { inject } from '@angular/core';
import { BaseService } from './services/base.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

export class BaseClass {
  protected baseService = inject(BaseService);
  protected store = inject(Store<AppState>);
  protected dialog = inject(MatDialog);
  protected notFound!: boolean;
  listFields: {label: string, value: string}[] = [];

  openModal(modal: ComponentType<unknown>, data: any) {
    this.dialog.open(modal, {
      hasBackdrop: true,
      width: '700px',
      data
    });
  }
}
