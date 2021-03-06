import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input("gridType")
  gridTyp : string = 'striped';

  @Input("backgroud")
  bgColor : string = 'info';

  @Input() dataList : any[] = [];

  @Input() columnHeaderList : string[] = [];

  @Input() fieldList : string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
