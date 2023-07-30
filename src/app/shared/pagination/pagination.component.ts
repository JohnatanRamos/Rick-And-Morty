import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IResponseApi } from 'src/app/core/interfaces/IResponseApi.interface';
import { AppState } from 'src/app/store/app.reducer';
import { IRickAndMorty } from 'src/app/store/reducers/rickAndMorty.reducer';
import * as actions from '../../store/actions/rickAndMorty.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  protected store = inject(Store<AppState>);
  @Output() emitPageChange = new EventEmitter();

  currentPage = 1;
  responseApi?: IResponseApi;

  ngOnInit(): void {
    this.store.select('rickAndMorty').subscribe({
      next: (res: IRickAndMorty) => {
        this.currentPage = res.currentPage;
        this.responseApi = res.responseApi;
      }
    });
  }

  goToPage(): void {
    if (
      this.responseApi &&
      this.currentPage >= 1 &&
      this.currentPage <= this.responseApi?.info?.pages
    ) {
      this.emitPageChange.emit();
      // this.getLocations();
    }
  }

  next(): void {
    this.currentPage += 1;
    this.store.dispatch(actions.setPagination({currentPage: this.currentPage}));
    this.goToPage();
  }

  prev(): void {
    this.currentPage -= 1;
    this.store.dispatch(actions.setPagination({currentPage: this.currentPage}));
    this.goToPage();
  }
}
