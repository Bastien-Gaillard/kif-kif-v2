import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '../../models/filter.model';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [IonicModule, FormsModule],
  standalone: true,
})
export class FilterModalComponent implements OnInit {
  @Input() filterConfig: Filter.FilterConfig[] = [];
  @Input() filterData: any = {};

  filters: any = {};
  currentRangeMin!: any;
  currentRangeMax!: any;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.filterConfig);
    this.filters = { ...this.filterData };
    console.log(this.filterConfig, this.filterData);
  }

  updateRangeValue(event: any, type: 'min' | 'max') {
    if (type === 'min') {
      this.currentRangeMin = event.detail.value;
    } else if (type === 'max') {
      this.currentRangeMax = event.detail.value;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  applyFilters() {
    this.modalController.dismiss(this.filters);
  }

  openSelect(select: any) {
    select.open();
  }
}
