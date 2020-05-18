import { Component, OnInit } from '@angular/core';
import {CompteService} from '../services/compte.service';
import {Compte} from '../Model/Compte';
import {Router} from '@angular/router';
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  idCompte: any;
  infoCompte: Compte;
message: string;

  constructor(public route: Router , public comptesService: CompteService) { }

  ngOnInit(): void {
  }

  chercherCompte(idCompte: any) {
this.comptesService.getCompte(this.idCompte).subscribe(data => {
  this.infoCompte = data;
  console.log(data);
}, error => {
  this.message = 'Compte introuvable';
});
  }

  goToPageOp(codeCompte: string) {
this.route.navigate(['/operations/', codeCompte]);
  }
}
