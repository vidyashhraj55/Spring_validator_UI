import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from "./form/form.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./user.service";
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  
  { path: 'form', component: FormComponent },
  { path: 'list-user', component: ListUserComponent },
  {path:'edit-user/:id',component:EditUserComponent},
  {path : '', component : FormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
  FormComponent,
    ListUserComponent,
    EditUserComponent
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
