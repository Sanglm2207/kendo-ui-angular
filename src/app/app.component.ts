import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './models/products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-demo1';

  constructor() {
    this.loadItems();
  }

  public items: any[] = [
      { text: 'item1', items: [{ text: 'item1.1' }] },
      { text: 'item2', items: [{ text: 'item2.1' }] },
      { text: 'item3', items: [{ text: 'item3.1' }] },
      { text: 'item4', items: [{ text: 'item4.1' }] },
      { text: 'item5', items: [{ text: 'item5.1' }] },
      { text: 'item2', disabled: true }
  ];

  public gridView: GridDataResult;
  public gridData: any[] = products;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];
  public multiple = false;
    public allowUnsort = true;
    public sort: SortDescriptor[] = [{
      field: 'Price',
      dir: 'asc'
    }];

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
}

public sortChange(sort: SortDescriptor[]): void {
  this.sort = sort;
  this.loadProducts();
}

private loadItems(): void {
    this.gridView = {
        data: this.gridData.slice(this.skip, this.skip + this.pageSize),
        total: this.gridData.length
    };
}

private loadProducts(): void {
  this.gridView = {
      data: orderBy(this.gridData, this.sort),
      total: this.gridData.length
  };
}


  public maskedValue: string;
  public sliderValue = 5;
  public numericValue = 5;
  public switchValue = false;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  public checked = true;
  public radioValue = 'foo';

  public toggleText = 'Show';
  public show = false;

  public enabled = true;
  public duration = 200;
  public type = 'slide';
  public direction = 'down';

  public get animate(): any {
    if (this.enabled) {
      return {
        type: this.type,
        direction: this.direction,
        duration: this.duration
      };
    }

    return false;
  }

  public get hasDirection(): boolean {
    return this.type === 'slide' || this.type === 'expand';
  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Hide' : 'Show';
  }


}
