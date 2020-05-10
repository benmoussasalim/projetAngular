export class Client {
  public code: any;
  public nom: string ;
  public prenom: string;
  public dateNaiss: Date;
  public email: string;
  public adresse: string;


  // @ts-ignore
  constructor(code: number= '', nom: string= '', prenom: string= '', dateNaiss: Date, email: string= '', adresse: string= '') {
    this.code = code;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaiss = dateNaiss;
    this.email = email;
    this.adresse = adresse;
  }
}
