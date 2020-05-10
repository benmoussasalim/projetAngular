import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';

const appRoutes: Routes = [
  {path: 'about', component : AboutComponent },
  {path: 'clients', component : ClientsComponent },
  {path: 'newClient', component : NewClientComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
