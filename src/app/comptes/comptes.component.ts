import { Component, OnInit } from '@angular/core';
import {CompteService} from '../services/compte.service';
import {Compte} from '../Model/Compte';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  idCompte: any;
  infoCompte: Compte;
  message: string;
  montant: any;
  codeCompte2: any;
  typeOp: any;

  constructor(public route: Router, public comptesService: CompteService) {
  }

  ngOnInit(): void {
  }

  chercherCompte() {
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

  operationCp() {
    console.log(this.typeOp);
    console.log(this.montant);
    console.log(this.infoCompte.codeCompte);
    if (this.typeOp === 'VERS') {
      this.comptesService.verser(this.idCompte, this.montant).subscribe(data => {
        console.log('versemaent avec succes');
      }, error => {
        console.log(error);
      });
    } else if (this.typeOp === 'RET') {
      this.comptesService.retrait(this.idCompte, this.montant).subscribe(data => {
        console.log('retrait avec succes');
      }, error => {
        console.log(error);
      });

    } else if (this.typeOp === 'VIR') {
      this.comptesService.Virement(this.idCompte, this.codeCompte2, this.montant).subscribe(data => {
        console.log('virement avec succes');
      }, error => {
        console.log(error);
      });
  }
}
}
