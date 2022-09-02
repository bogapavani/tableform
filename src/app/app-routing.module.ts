import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path:'ourproduct',
    component:OurproductComponent
  },
  {
    path:'recipes',
    component:RecipesComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
