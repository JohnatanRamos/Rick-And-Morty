import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { typeFields } from 'src/app/core/interfaces/ITypeFilters.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions/rickAndMorty.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  protected store = inject(Store<AppState>);
  @Output() emitFilter = new EventEmitter();
  
  fieldToSearch = new FormControl('name');
  worldToSearch = new FormControl('');
  
  ngOnInit(): void {
    this.worldToSearch.valueChanges.pipe(debounceTime(600)).subscribe({
      next: () => {
        this.search();
      },
    });
  }

  search() {
    const key = this.fieldToSearch.value as typeFields;
    this.setFilters(key, this.worldToSearch.value);
  }

  setFilters(field: typeFields, value: string | null) {
    this.store.dispatch(actions.setOptions({field, value}));
    this.store.dispatch(actions.setPagination({currentPage: 1}));
    this.emitFilter.emit();
  }
}
