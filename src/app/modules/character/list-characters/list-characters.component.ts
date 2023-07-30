import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { BaseClass } from 'src/app/core/base.class';
import { ITypeFilters, typeFields } from 'src/app/core/interfaces/ITypeFilters.interface';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../../store/actions/rickAndMorty.actions';
import { ViewCharacterComponent } from '../view-character/view-character.component';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent extends BaseClass implements OnInit, OnDestroy {
  currentPage = 1;
  status = new FormControl(null);
  gender = new FormControl(null);
  options: ITypeFilters = {};
  modal = ViewCharacterComponent;
  typeStatus: any = {
    Dead: 'Muerto',
    Alive: 'Vivo',
    unknown: 'Desconocido'
  };
  store$!: Subscription;

  ngOnInit(): void {
    this.getCharacters();

    this.store$ = this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.currentPage = res.currentPage;
        this.options = res.options;
        this.notFound = res.notFound;
      }
    });
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
    this.store.dispatch(actions.resetValues());
  }

  getCharacters() {
    this.baseService.getMethod(`character`, this.currentPage, this.options).subscribe({
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

  setFilters(field: typeFields, value: string | null) {
    this.store.dispatch(actions.setOptions({field, value}));
    this.store.dispatch(actions.setPagination({currentPage: 1}));
    this.getCharacters();
  }
}
