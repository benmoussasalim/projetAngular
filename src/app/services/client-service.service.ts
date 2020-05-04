import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(public http: HttpClient) { }

  getClients(){
    return this.http.get('http://localhost:8080/clients');
  }
}
