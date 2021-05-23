import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent},
    { path: 'results', component: ResultsComponent},
    { path: '', redirectTo:'search', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
