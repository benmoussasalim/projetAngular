import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public http: HttpClient) { }
  getCompte(codeCompte: any): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/comptes/' + codeCompte);
  }


}
