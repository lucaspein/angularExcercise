import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './features/components/contact-list/contact-list.component';
import { ContactDetailComponent } from './features/components/contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: 'contacts', component: ContactListComponent
  },
  {
    path: 'detail/:id', component: ContactDetailComponent
  },
  {
    path: '**', component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
