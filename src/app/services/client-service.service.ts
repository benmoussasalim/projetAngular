import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Client} from '../Model/Client';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(public http: HttpClient) { }

  getClients(): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/clients');
  }
  getClientss( motCle: string, page: number, size: number): Observable<any> {
    return this.http.get<any> ('http://localhost:8080/clients/listClient?mc=' + motCle + '&size=' + size + '&page=' + page);
  }

  getClient(code: any): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/clients/' + code);
  }

  saveClient( client: Client): Observable<any> {
    return this.http.post<any>('http://localhost:8080/clients', client);
  }

  updateClient( client: Client): Observable<any> {
    return this.http.put<any>('http://localhost:8080/clients/' + client.code, client);
  }

  deleteClient( code: any): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/clients/' + code);
  }
}

