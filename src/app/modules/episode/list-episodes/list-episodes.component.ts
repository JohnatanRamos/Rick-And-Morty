import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { BaseClass } from 'src/app/core/base.class';
import { ITypeFilters } from 'src/app/core/interfaces/ITypeFilters.interface';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../../store/actions/rickAndMorty.actions';
import { ViewEpisodeComponent } from '../view-episode/view-episode.component';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent extends BaseClass implements OnInit, OnDestroy {
  currentPage = 1;
  options: ITypeFilters = {};
  modal = ViewEpisodeComponent;
  store$!: Subscription;

  ngOnInit(): void {
    this.getEpisodes();

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

  getEpisodes() {
    this.baseService.getMethod(`episode`, this.currentPage, this.options).subscribe({
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
}
