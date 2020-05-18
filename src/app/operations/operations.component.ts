import { Component, OnInit } from '@angular/core';
import {Operation} from '../Model/Operation';
import {OperationService} from '../services/operation.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  currentPage = 0 ; size = 5 ; number;
  codeCompte = ''; string;
pageOperation: Operation[];
  pages: any;
  constructor(private operationsService: OperationService, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.operationsService.getOperations(this.activateRoute.snapshot.params.codeCompte, this.currentPage, this.size).subscribe(data => {
     console.log(data.content);
     this.pageOperation = data.content;
     this.pages = new Array(data.totalPages);
    }, error => {
      console.log(error);
    } );
  }

}
