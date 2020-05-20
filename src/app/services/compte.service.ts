import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public http: HttpClient) {
  }

  getCompte(codeCompte: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/comptes/' + codeCompte);
  }

  verser(codeCompte, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/verser/' + codeCompte + '&' + montant );
  }

  retrait(codeCompte, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/retirer/' + codeCompte + '&' + montant);
  }

  Virement(codeCompte1, codeCompte2, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/virement/' + codeCompte1 + '&' + codeCompte2 + '&' + montant);
  }

}


