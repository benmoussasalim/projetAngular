import { Component, OnInit } from '@angular/core';
import {Client} from '../Model/Client';
import {HttpClient} from '@angular/common/http';
import {ClientServiceService} from '../services/client-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  submitted = false;
  client: Client;
  mode = 1;
  postForm: FormGroup;
  constructor(public clientService: ClientServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      prenom: ['', Validators.required]
    });
  }

  get f() { return this.postForm.controls; }

  saveClient() {
    this.submitted = true;

    if (this.postForm.invalid) {
      return;
    }
    console.log(this.postForm.value);

    this.clientService.saveClient(this.postForm.value)
      .pipe(
        finalize(() => this.submitted = false),
      ).subscribe(data => {
  this.client = data;
  this.mode = 2;
}, error => {
  console.log(error);
});
  }
}
