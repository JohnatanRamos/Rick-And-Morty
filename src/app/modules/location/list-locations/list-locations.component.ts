import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/core/base.class';
import { ITypeFilters } from 'src/app/core/interfaces/ITypeFilters.interface';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../../store/actions/rickAndMorty.actions';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss'],
})
export class ListLocationsComponent extends BaseClass implements OnInit {
  currentPage = 1;
  options: ITypeFilters = {};

  ngOnInit(): void {
    this.getLocations();

    this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.currentPage = res.currentPage;
        this.options = res.options;
      }
    });
  }

  getLocations() {
    this.baseService.getMethod(`character`, this.currentPage, this.options).subscribe({
      next: (res: any) => {
        this.store.dispatch(actions.setResponseApi({ responseApi: res }));
      },
    });
  }
}
