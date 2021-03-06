import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Contigent } from 'src/models/contigent.model';
import { UserService } from 'src/services/user.service';
import Constants from './performance-evaluation.constant';

@Component({
  selector: 'app-performance-evaluation',
  templateUrl: './performance-evaluation.component.html',
  styleUrls: ['./performance-evaluation.component.sass']
})
export class PerformanceEvaluationComponent implements OnInit {
  public contigentList: Array<Contigent> = [];
  public columnDefs = Constants.COLUMN_DEFINATION;
  constructor(public userService: UserService) { }
  public defaultColDef: ColDef = {
    resizable: true,
  };
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(user => {
      this.contigentList = user?.contingents || [];
    })
  }

}
