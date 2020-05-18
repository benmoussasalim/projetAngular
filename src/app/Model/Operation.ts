export class Operation{
  typeOperation: string;
  numero: number;
  dateOpertion: Date;
  montant: any;
  codeCompte: string;


  constructor(typeOperation: string, numero: number, dateOpertion: Date, montant: any, codeCompte: string) {
    this.typeOperation = typeOperation;
    this.numero = numero;
    this.dateOpertion = dateOpertion;
    this.montant = montant;
    this.codeCompte = codeCompte;
  }
}
