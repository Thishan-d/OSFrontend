import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyService } from './Services/my.service';

import {TableComponent } from '../app/Views/table/table.component';
import { Observable } from 'rxjs';
import { UserElement } from './Interfaces/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private apiService = inject(MyService);
  public tableData$ = this.apiService.getData();

}
