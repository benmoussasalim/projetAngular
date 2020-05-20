import { Component, OnInit } from '@angular/core';
import {Client} from '../Model/Client';
import {ActivatedRoute} from '@angular/router';
import {ClientServiceService} from '../services/client-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  submitted = false;
  client: Client;
  postForm: FormGroup;
  idClientEdit: any;
  mode = 1;
  constructor(public activateRoute: ActivatedRoute, public clientService: ClientServiceService, private formBuilder: FormBuilder) {
    console.log(activateRoute.snapshot.params.code);
    this.idClientEdit = activateRoute.snapshot.params.code;
  }

  ngOnInit(): void {
    this.clientService.getClient(this.idClientEdit).subscribe(data => {
      this.client = data;
    }, error => {
      console.log(error);
    });

    this.postForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      prenom: ['', Validators.required]});
  }
  get f() { return this.postForm.controls; }
  updateClient()
  {
    this.submitted = true;

    if (this.postForm.invalid) {
      return;
    }
    this.clientService.updateClient(this.postForm.value).subscribe(data => {

      console.log(this.postForm.value);
      this.client = data;
      alert('Mise a jour effectué avec success');
      this.mode = 2;
    }, error => {
      console.log(error);
    });
  }
  }

