import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { BaseClass } from 'src/app/core/base.class';
import { ITypeFilters } from 'src/app/core/interfaces/ITypeFilters.interface';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../../store/actions/rickAndMorty.actions';
import { ViewLocationComponent } from '../view-location/view-location.component';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss'],
})
export class ListLocationsComponent extends BaseClass implements OnInit, OnDestroy {
  currentPage = 1;
  options: ITypeFilters = {};
  modalComponent = ViewLocationComponent;
  store$!: Subscription;

  ngOnInit(): void {
    this.getLocations();
    this.listFields = [{
      label: 'Nombre',
      value: 'name'
    },
    {
      label: 'Tipo',
      value: 'type'
    }];
    this.store$ = this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.currentPage = res.currentPage;
        this.options = res.options;
        this.notFound = res.notFound;
      }
    });
  }

  getLocations() {
    this.baseService.getMethod(`location`, this.currentPage, this.options).subscribe({
      next: (res: any) => {
        this.store.dispatch(actions.setResponseApi({ responseApi: res }));
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.store.dispatch(actions.notFoundValue());
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
    this.store.dispatch(actions.resetValues());
  }
}
