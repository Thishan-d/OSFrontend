import { Component, Input,ViewChild,AfterViewInit,ChangeDetectorRef, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserElement } from '../../Interfaces/User';
import { CompletedStatusPipe } from '../../Pipes/completed-status.pipe';
import {signal, Signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,CommonModule,CompletedStatusPipe,MatButtonModule,MatCardModule,MatGridListModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})


export class TableComponent implements AfterViewInit{
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selectedRowData = signal<UserElement>(<UserElement>{});
  dataSource: MatTableDataSource<UserElement> = new MatTableDataSource<UserElement>();

  @Input() tableData$:any;
  

//lifecycle hook for pagination purpose if you need pagination
  ngAfterViewInit() {
    // this.dataSource.data = this.tableData$;
    // this.dataSource.paginator = this.paginator;
  }
  
  onSelectedRow(selectedRowData:any)
  {
    console.log(selectedRowData);
    this.selectedRowData.set(selectedRowData);
  }

  onPageSizeChange(event:any)
  {
    console.log("event.pageSize :",event.pageSize);
  }

}
