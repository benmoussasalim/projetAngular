import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../services/client-service.service';
import {HttpClient} from '@angular/common/http';
import {Client} from '../Model/Client';
import {Router} from '@angular/router';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
pageclient: Client[];
motCle = ''; string;
currentPage = 0 ; size = 5 ; number;
pages: any;

  constructor( public http: HttpClient , private  clientService: ClientServiceService , public router: Router) { }

  ngOnInit(): void {
  }

  dosearch() {
    this.clientService.getClientss(this.motCle, this.currentPage, this.size).subscribe(data => {
      this.pageclient = data.content;
      this.pages = new Array(data.totalPages);
      console.log(data);
    }, error => {
      console.log(error);
    } );
  }


  chercher() {
this.dosearch();
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.dosearch();
  }

  onEditClient(code: any) {
this.router.navigate(['editClient', code]);
  }


  onDeleteClient(c: Client) {
    const confirm = window.confirm('Est vous sure ?');
    if ( confirm === true ){
      this.clientService.deleteClient(c.code).subscribe(data => {
        this.pageclient.splice(this.pageclient.indexOf(c), 1);
      }, error => {
        console.log(error);
      });
    }
  }
}
