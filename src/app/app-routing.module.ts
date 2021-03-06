import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [{
  path: 'cities',
  component: CitiesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // onSameUrlNavigation: 'reload',
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
