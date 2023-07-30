import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IResponseApi } from 'src/app/core/interfaces/IResponseApi.interface';
import { AppState } from 'src/app/store/app.reducer';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../store/actions/rickAndMorty.actions';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  protected store = inject(Store<AppState>);
  @Output() emitSort = new EventEmitter();

  fieldSort = new FormControl('');
  typeSort = new FormControl('asc');
  responseApi?: IResponseApi;
  
  ngOnInit(): void {
    this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.responseApi = res.responseApi;
      }
    });
  }

  sort() {
    if (!this.fieldSort.value) {
      this.emitSort.emit();
      return;
    }
    const field = this.fieldSort.value!
    if (this.typeSort.value === 'asc') {
      this.ascSort(field);
      return;
    }
    this.descSort(field);
  }

  ascSort(field: string) {
    const newArray = structuredClone(this.responseApi);
    newArray?.results.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.store.dispatch(actions.setResponseApi({responseApi: newArray!}));
  }

  descSort(field: string) {
    const newArray = structuredClone(this.responseApi);
    newArray?.results.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.store.dispatch(actions.setResponseApi({responseApi: newArray!}));
  }
}
