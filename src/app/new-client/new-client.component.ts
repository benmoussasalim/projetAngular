import { Component, OnInit } from '@angular/core';
import {Client} from '../Model/Client';
import {HttpClient} from '@angular/common/http';
import {ClientServiceService} from '../services/client-service.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
// @ts-ignore
  client: Client = new Client();
  mode = 1;
  constructor(public clientService: ClientServiceService) { }

  ngOnInit(): void {
  }

  saveClient() {
this.clientService.saveClient(this.client).subscribe(data => {
  this.client = data;
  this.mode = 2;
}, error => {
  console.log(error);
});
  }
}
