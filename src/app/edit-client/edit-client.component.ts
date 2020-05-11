import { Component, OnInit } from '@angular/core';
import {Client} from '../Model/Client';
import {ActivatedRoute} from '@angular/router';
import {ClientServiceService} from '../services/client-service.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  // @ts-ignore
  client: Client = new Client();
  mode = 1;
  idClientEdit: any;
  constructor(public activateRoute: ActivatedRoute, public clientService: ClientServiceService) {
    console.log(activateRoute.snapshot.params.code);
    this.idClientEdit = activateRoute.snapshot.params.code;
  }

  ngOnInit(): void {
    this.clientService.getClient(this.idClientEdit).subscribe(data => {
      this.client = data;
    }, error => {
      console.log(error);
    });
  }

  updateClient() {
this.clientService.updateClient(this.client).subscribe(data => {
  this.client = data;
  alert('Mise a jour effectué avec success');
  this.mode = 2;
}, error => {
  console.log(error);
});
  }
}
