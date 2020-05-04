import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientServiceService} from '../services/client-service.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
pageclient: any;
  constructor(public http: HttpClient ,public clientService: ClientServiceService) { }

  ngOnInit(): void {
   this.clientService.getClients().subscribe(data => {
     this.pageclient = data;
   }, error => {
     console.log(error);
   } );
  }

}
