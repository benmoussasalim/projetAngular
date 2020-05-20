import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ComptesComponent } from './comptes/comptes.component';
import { OperationsComponent } from './operations/operations.component';

const appRoutes: Routes = [
  {path: 'about', component : AboutComponent },
  {path: 'clients', component : ClientsComponent },
  {path: 'comptes', component : ComptesComponent },
  {path: 'operations/:codeCompte', component : OperationsComponent},
  {path: 'newClient', component : NewClientComponent},
  {path: 'editClient/:code', component : EditClientComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    EditClientComponent,
    ComptesComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
