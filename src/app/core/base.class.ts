import { inject } from '@angular/core';
import { BaseService } from './services/base.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

export class BaseClass {
  protected baseService = inject(BaseService);
  protected store = inject(Store<AppState>);

}
