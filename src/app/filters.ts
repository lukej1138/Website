import { Injectable, OnInit, inject, signal} from '@angular/core';
import { ProjectRaw } from './projectraw';

@Injectable({
  providedIn: 'root',
})
export class Filters {
  
  private rawData = inject(ProjectRaw);
  readonly projectInformation = this.rawData.getAllData();
  filteredProjectInformation = signal(this.projectInformation)
  appliedFilters : string[] = [];
  unappliedFilters = this.rawData.getAllRawTags();

  constructor() {
    this.filteredProjectInformation.update((value) => value.sort((a, b) => b.priority - a.priority));
  }

  adjustFilters(filter : string, toRemove : boolean) {
    this.clearFilters();
    if (toRemove && this.appliedFilters.includes(filter)) {
      this.removeFilter(filter);
    } else if (!toRemove) {
      this.addFilter(filter);
    }
    this.filteredProjectInformation.set(this.projectInformation.filter((item) => this.appliedFilters.every(element => item.popUp.tags.includes(element))));
    this.filteredProjectInformation.update((value) => value.sort((a, b) => b.priority - a.priority));
  }

  private removeFilter(filter : string) {
    this.appliedFilters = this.appliedFilters.filter((item) => item != filter);
    this.unappliedFilters.push(filter);
    this.unappliedFilters.sort();
  }

  private addFilter(filter: string) {
    this.appliedFilters.push(filter);
    this.appliedFilters.sort();
    this.unappliedFilters = this.unappliedFilters.filter((item) => item != filter);
  }

  private clearFilters() {
    this.appliedFilters = [];
    this.unappliedFilters = this.rawData.getAllRawTags();
  }
}
