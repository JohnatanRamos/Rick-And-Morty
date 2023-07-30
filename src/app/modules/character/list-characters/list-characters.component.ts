import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseClass } from 'src/app/core/base.class';
import { ITypeFilters, typeFields } from 'src/app/core/interfaces/ITypeFilters.interface';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../../store/actions/rickAndMorty.actions';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent extends BaseClass implements OnInit {
  currentPage = 1;
  status = new FormControl(null);
  gender = new FormControl(null);
  options: ITypeFilters = {};

  ngOnInit(): void {
    this.getCharacters();

    this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.currentPage = res.currentPage;
        this.options = res.options;
      }
    });
  }

  getCharacters() {
    this.baseService.getMethod(`character`, this.currentPage, this.options).subscribe({
      next: (res: any) => {
        this.store.dispatch(actions.setResponseApi({ responseApi: res }));
      },
    });
  }

  setFilters(field: typeFields, value: string | null) {
    this.store.dispatch(actions.setOptions({field, value}));
    this.store.dispatch(actions.setPagination({currentPage: 1}));
    this.getCharacters();
  }
}
