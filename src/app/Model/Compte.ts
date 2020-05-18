export class Compte {
  public codeCompte: string;
  public dateCreation: Date;
  public solde: any;
  public decouvert: any;
  public taux: any;
  public codeClient: any;

  // tslint:disable-next-line:max-line-length
  // @ts-ignore
  constructor(codeCompte: string= '', dateCreation: any, solde: Date= '', decouvert: any= null, taux: any= null, codeClient: any= '') {
    this.codeCompte = codeCompte;
    this.dateCreation = dateCreation;
    this.solde = solde;
    this.decouvert = decouvert;
    this.taux = taux;
    this.codeClient = codeClient;
  }
}
